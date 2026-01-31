'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown, MapPin, Mail, Phone, Calculator, TrendingUp, Users, Clock, CheckCircle, AlertCircle, Calendar, Download } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub, FaXTwitter } from 'react-icons/fa6';
import DiscoveryCallModal from '../../components/DiscoveryCallModal';

export default function PricingCalculator() {
  const [serviceType, setServiceType] = useState('consulting');
  const [projectScope, setProjectScope] = useState('medium');
  const [timeline, setTimeline] = useState('standard');
  const [teamSize, setTeamSize] = useState(1);
  const [managedServices, setManagedServices] = useState(false);
  const [training, setTraining] = useState(false);
  const [estimate, setEstimate] = useState(0);
  const [monthlyEstimate, setMonthlyEstimate] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedConsultingService, setSelectedConsultingService] = useState('Strategy & Governance');
  const [discoveryCallModalOpen, setDiscoveryCallModalOpen] = useState(false);
  const consultingServices = [
    'Strategy & Governance',
    'Data Platform Build',
    'Analytics & BI',
    'MLOps & AI',
    'Managed Services'
  ];
  const trainingProgramPrices = {
    'Power BI Analyst': 1599,
    'Azure Data Engineer': 3999,
    'Databricks Engineer': 3999,
    'Business Intelligence Analyst': 1799,
    'AI Engineer': 3999,
    'Prompt Engineering': 1599,
    'Python for Data': 1599,
    'Azure Data Factory Masterclass': 1799
  };
  const trainingProgramTimelines = {
    'Power BI Analyst': '12 weeks',
    'Azure Data Engineer': '24 weeks',
    'Databricks Engineer': '24 weeks',
    'Business Intelligence Analyst': '12 weeks',
    'AI Engineer': '24 weeks',
    'Prompt Engineering': '12 weeks',
    'Python for Data': '12 weeks',
    'Azure Data Factory Masterclass': '12 weeks'
  };
  const [selectedTrainingProgram, setSelectedTrainingProgram] = useState('Power BI Analyst');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    calculateEstimate();
  }, [serviceType, projectScope, timeline, teamSize, managedServices, training, selectedTrainingProgram]);

  // When switching to Training, clear consulting add-ons
  useEffect(() => {
    if (serviceType === 'training') {
      setManagedServices(false);
      setTraining(false);
    }
  }, [serviceType]);

  const calculateEstimate = () => {
    let base = 0;
    let monthly = 0;

    // Base pricing by service type
    if (serviceType === 'consulting') {
      const scopePricing = {
        small: 50000,
        medium: 150000,
        large: 250000,
        enterprise: 400000
      };
      base = scopePricing[projectScope] || 150000;

      // Timeline adjustments
      if (timeline === 'rush') base *= 1.25;
      if (timeline === 'extended') base *= 0.9;

      // Team size multiplier
      if (teamSize > 1) {
        base += (teamSize - 1) * 40000;
      }
    } else if (serviceType === 'training') {
      const pricePerPerson = trainingProgramPrices[selectedTrainingProgram] || 1599;
      base = pricePerPerson * teamSize; // Price per person for selected program
    }

    // Add-ons (consulting only)
    if (serviceType === 'consulting' && managedServices) {
      monthly = projectScope === 'enterprise' ? 25000 : projectScope === 'large' ? 15000 : 8000;
    }

    if (training && serviceType === 'consulting') {
      base += 15000; // Training add-on
    }

    setEstimate(base);
    setMonthlyEstimate(monthly);
  };

  const handleDownloadEstimatePDF = () => {
    const now = new Date();
    const ref = `RPK-${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}-${String(now.getHours()).padStart(2,'0')}${String(now.getMinutes()).padStart(2,'0')}`;
    const timelineText = getTimelineEstimate();

    // Build detailed line items based on service type
    let lineItems = '';
    let subtotal = 0;

    if (serviceType === 'consulting') {
      // Base project cost
      const scopePricing = {
        small: 50000,
        medium: 150000,
        large: 250000,
        enterprise: 400000
      };
      let basePrice = scopePricing[projectScope] || 150000;

      // Timeline adjustment
      let timelineMultiplier = 1;
      let timelineLabel = '';
      if (timeline === 'rush') {
        timelineMultiplier = 1.25;
        timelineLabel = ' (Rush +25%)';
      } else if (timeline === 'extended') {
        timelineMultiplier = 0.9;
        timelineLabel = ' (Flexible -10%)';
      }

      const adjustedBase = basePrice * timelineMultiplier;
      lineItems += `<div class="line-item">
        <div class="line-desc">
          <div class="line-name">${selectedConsultingService} - ${projectScope.charAt(0).toUpperCase() + projectScope.slice(1)} Scope${timelineLabel}</div>
          <div class="line-detail">${timelineText} timeline • Discovery, implementation, testing & deployment</div>
        </div>
        <div class="line-amount">${formatCurrency(adjustedBase)}</div>
      </div>`;
      subtotal += adjustedBase;

      // Additional consultants
      if (teamSize > 1) {
        const additionalCost = (teamSize - 1) * 40000;
        lineItems += `<div class="line-item">
          <div class="line-desc">
            <div class="line-name">Additional Consultants (${teamSize - 1})</div>
            <div class="line-detail">${formatCurrency(40000)} per consultant</div>
          </div>
          <div class="line-amount">${formatCurrency(additionalCost)}</div>
        </div>`;
        subtotal += additionalCost;
      }

      // Training add-on
      if (training) {
        lineItems += `<div class="line-item">
          <div class="line-desc">
            <div class="line-name">Team Training Workshops</div>
            <div class="line-detail">Knowledge transfer and hands-on sessions</div>
          </div>
          <div class="line-amount">${formatCurrency(15000)}</div>
        </div>`;
        subtotal += 15000;
      }

      // Managed services (recurring)
      if (managedServices) {
        lineItems += `<div class="line-item recurring">
          <div class="line-desc">
            <div class="line-name">Managed Services (Ongoing)</div>
            <div class="line-detail">24/7 monitoring, optimization & support</div>
          </div>
          <div class="line-amount">${formatCurrency(monthlyEstimate)}/month</div>
        </div>`;
      }

    } else {
      // Training program
      const pricePerPerson = trainingProgramPrices[selectedTrainingProgram] || 1599;
      const totalTraining = pricePerPerson * teamSize;

      lineItems += `<div class="line-item">
        <div class="line-desc">
          <div class="line-name">${selectedTrainingProgram}</div>
          <div class="line-detail">${trainingProgramTimelines[selectedTrainingProgram] || '12 weeks'} • ${teamSize} student${teamSize > 1 ? 's' : ''} × ${formatCurrency(pricePerPerson)}</div>
        </div>
        <div class="line-amount">${formatCurrency(totalTraining)}</div>
      </div>`;
      subtotal += totalTraining;
    }

    const html = `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ripotek Estimate ${ref}</title>
        <style>
          :root{ --bg:#0b1220; --teal:#0f766e; --cyan:#22d3ee; --ink:#0f172a; --muted:#475569; }
          *{ box-sizing:border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          @page { size: Letter; margin: 20mm; }
          html, body{ height:100%; }
          body{ margin:0; background:#fff; font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial; color:#0f172a; font-size:14px; line-height:1.5; }
          .page{ padding:0; }
          .wrap{ padding:40px 48px; max-width:800px; margin:0 auto; }
          .letterhead{ display:flex; align-items:center; gap:12px; margin-bottom:8px; }
          .logo{ width:44px; height:44px; border-radius:12px; box-shadow:0 8px 24px rgba(2,132,199,.25); }
          .brand{ line-height:1.2; }
          .brand .name{ font-size:18px; font-weight:800; letter-spacing:.2px; background:linear-gradient(90deg,#0b1220,#0f766e); -webkit-background-clip:text; background-clip:text; color:transparent; }
          .brand .tag{ font-size:10px; color:#64748b; font-style:italic; margin-top:2px; }
          .bar{ height:6px; background:linear-gradient(90deg,#0b1220,#0f766e,#22d3ee); border-radius:6px; margin:16px 0 24px; }
          .title{ font-size:28px; font-weight:800; color:#0b1220; margin:0 0 6px; }
          .subtitle{ color:#475569; margin:0 0 20px; font-size:15px; }
          .meta{ display:flex; flex-wrap:wrap; gap:20px; margin:0 0 28px; padding:16px 20px; background:#f8fafc; border-radius:12px; border:1px solid #e2e8f0; }
          .meta div{ font-size:13px; color:#334155; }
          .meta strong{ color:#0b1220; font-weight:600; }

          .section-title{ font-weight:700; font-size:16px; color:#0b1220; margin:28px 0 14px; padding-bottom:8px; border-bottom:2px solid #0f766e; }

          .line-items{ border:1px solid #e2e8f0; border-radius:12px; padding:0; margin:0 0 20px; overflow:hidden; }
          .line-item{ display:flex; justify-content:space-between; align-items:flex-start; padding:16px 20px; border-bottom:1px solid #f1f5f9; }
          .line-item:last-child{ border-bottom:none; }
          .line-item.recurring{ background:#fef3c7; border-left:4px solid #f59e0b; }
          .line-desc{ flex:1; }
          .line-name{ font-weight:600; color:#0b1220; margin-bottom:4px; }
          .line-detail{ font-size:12px; color:#64748b; }
          .line-amount{ font-weight:700; color:#0f766e; white-space:nowrap; margin-left:20px; font-size:15px; }

          .totals{ background:#f8fafc; border-radius:12px; padding:16px 20px; margin:20px 0; }
          .total-row{ display:flex; justify-content:space-between; padding:8px 0; font-size:14px; }
          .total-row.final{ border-top:2px solid #0f766e; padding-top:12px; margin-top:8px; font-size:20px; font-weight:800; color:#0f766e; }

          .note{ background:#f0fdfa; border-left:4px solid #0f766e; padding:16px 20px; margin:24px 0; border-radius:8px; font-size:13px; color:#0f172a; }

          .signature-block{ margin-top:40px; padding-top:28px; border-top:2px solid #e2e8f0; }
          .signature-grid{ display:grid; grid-template-columns:1fr 1fr; gap:40px; margin-top:20px; }
          .signature-box{ }
          .signature-label{ font-size:12px; color:#64748b; margin-bottom:8px; font-weight:600; text-transform:uppercase; letter-spacing:0.5px; }
          .signature-line{ border-bottom:2px solid #cbd5e1; padding-bottom:8px; min-height:50px; margin-bottom:8px; }
          .signature-info{ font-size:12px; color:#64748b; }

          .footer{ margin-top:40px; padding-top:20px; border-top:1px solid #e2e8f0; display:flex; justify-content:space-between; align-items:center; color:#64748b; font-size:11px; }
          .footer a{ color:#0f766e; text-decoration:none; }

          @media print{
            body{ background:#fff; }
            .wrap{ padding:20px; }
            .signature-line{ min-height:60px; }
          }
        </style>
      </head>
      <body>
        <div class="page">
          <div class="wrap">
            <div class="letterhead">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZmF2aWNvbi1ncmFkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzE0YjhhNjtzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWUzYThhO3N0b3Atb3BhY2l0eToxIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxmaWx0ZXIgaWQ9ImZhdmljb24tZ2xvdyI+CiAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIHJlc3VsdD0iY29sb3JlZEJsdXIiLz4KICAgICAgPGZlTWVyZ2U+CiAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJjb2xvcmVkQmx1ciIvPgogICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPgogICAgICA8L2ZlTWVyZ2U+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIyMCIgZmlsbD0idXJsKCNmYXZpY29uLWdyYWQpIi8+CiAgPHBhdGggZD0iTSAyNSAyMCBMIDI1IDgwIE0gMjUgMjAgTCA1MCAyMCBRIDYyIDIwIDYyIDMyIFEgNjIgNDQgNTAgNDQgTCAyNSA0NCBNICA0MiBMIDYyIDgwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNyIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBmaWx0ZXI9InVybCgjZmF2aWNvbi1nbG93KSIvPgogIDxjaXJjbGUgY3g9IjI1IiBjeT0iMjAiIHI9IjQiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuOSIvPgogIDxjaXJjbGUgY3g9IjYyIiBjeT0iMzIiIHI9IjQiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuOSIvPgogIDxjaXJjbGUgY3g9IjUwIiBjeT0iNDQiIHI9IjQiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuOSIvPgogIDxjaXJjbGUgY3g9IjYyIiBjeT0iODAiIHI9IjQiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuOSIvPgogIDxjaXJjbGUgY3g9IjI1IiBjeT0iODAiIHI9IjQiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuOSIvPgogIDxsaW5lIHgxPSIyNSIgeTE9IjIwIiB4Mj0iNjIiIHkyPSIzMiIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuNCIvPgogIDxsaW5lIHgxPSI2MiIgeTE9IjMyIiB4Mj0iNTAiIHkyPSI0NCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuNCIvPgogIDxsaW5lIHgxPSI1MCIgeTE9IjQ0IiB4Mj0iNjIiIHkyPSI4MCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuNCIvPgogIDxsaW5lIHgxPSIyNSIgeTE9IjgwIiB4Mj0iNjIiIHkyPSI4MCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuNCIvPgo8L3N2Zz4=" alt="Ripotek" class="logo" />
              <div class="brand">
                <div class="name">Ripotek Technologies Inc.</div>
                <div class="tag">Design. Engineer. Deliver.</div>
              </div>
            </div>
            <div class="bar"></div>

            <h1 class="title">Project Estimate</h1>
            <p class="subtitle">Professional estimate tailored to your requirements</p>

            <div class="meta">
              <div><strong>Reference:</strong> ${ref}</div>
              <div><strong>Date:</strong> ${now.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
              <div><strong>Service Type:</strong> ${serviceType === 'consulting' ? 'Consulting Services' : 'Training Program'}</div>
              <div><strong>Valid Until:</strong> ${new Date(now.getTime() + 30*24*60*60*1000).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
            </div>

            <div class="section-title">Line Items</div>
            <div class="line-items">
              ${lineItems}
            </div>

            <div class="totals">
              <div class="total-row">
                <span>Subtotal</span>
                <span>${formatCurrency(subtotal)}</span>
              </div>
              <div class="total-row final">
                <span>Total Investment</span>
                <span>${formatCurrency(estimate)}</span>
              </div>
            </div>

            <div class="note">
              <strong>Note:</strong> This estimate is valid for 30 days from the date above. Final pricing will be confirmed after a detailed discovery session. All prices are in Canadian Dollars (CAD) and exclude applicable taxes. Project scope and deliverables will be documented in a formal Statement of Work (SOW).
            </div>

            <div class="section-title">What's Included</div>
            <div class="note">
              ${serviceType === 'consulting'
                ? '✓ Discovery & assessment sessions<br>✓ Architecture design & documentation<br>✓ Platform implementation & configuration<br>✓ Testing & quality assurance<br>✓ Deployment & go-live support<br>✓ Post-implementation support (30 days)<br>✓ Knowledge transfer documentation'
                : '✓ Live instructor-led training sessions<br>✓ Hands-on projects & labs<br>✓ One-on-one mentorship<br>✓ Career coaching & job placement assistance<br>✓ Course materials & resources<br>✓ Certification preparation<br>✓ Alumni network access'}
            </div>

            <div class="signature-block">
              <div class="signature-grid">
                <div class="signature-box">
                  <div class="signature-label">Client Approval</div>
                  <div class="signature-line"></div>
                  <div class="signature-info">
                    Name: _______________________<br>
                    Title: _______________________<br>
                    Date: _______________________
                  </div>
                </div>
                <div class="signature-box">
                  <div class="signature-label">Ripotek Representative</div>
                  <div class="signature-line"></div>
                  <div class="signature-info">
                    Name: Ripotek Technologies Inc.<br>
                    Title: Authorized Representative<br>
                    Date: ${now.toLocaleDateString('en-CA')}
                  </div>
                </div>
              </div>
            </div>

            <div class="footer">
              <div>Ripotek Technologies Inc. • Calgary, Alberta, Canada</div>
              <div>
                <a href="mailto:info@ripotek.com">info@ripotek.com</a> •
                <a href="tel:+15872590033">+1 587-259-0033</a> •
                <a href="https://ripotek.com">ripotek.com</a>
              </div>
            </div>
          </div>
        </div>

        <script>
          // Auto-trigger print dialog
          window.onload = function() {
            window.print();
          };
        </script>
      </body>
    </html>`;

    // Create a hidden iframe to print instead of opening new tab
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(html);
    doc.close();

    // Clean up after printing
    iframe.contentWindow.onafterprint = function() {
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 100);
    };
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getROIEstimate = () => {
    if (serviceType === 'consulting') {
      return Math.round(estimate * 2.5); // 2.5x ROI average
    }
    return null;
  };

  const getTimelineEstimate = () => {
    if (serviceType === 'consulting') {
      const consultingTimelines = {
        small: '2-3 months',
        medium: '3-6 months',
        large: '6-9 months',
        enterprise: '9-12 months'
      };
      return consultingTimelines[projectScope] || 'Contact us';
    }
    // training: reflect selected program duration
    return trainingProgramTimelines[selectedTrainingProgram] || 'Custom timeline';
  };

  const navLinks = [
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'What we do', href: '/services' },
        { name: 'Strategy & Governance', href: '/services#strategy-&-governance' },
        { name: 'Data Platform Build', href: '/services#data-platform-build' },
        { name: 'Analytics & BI', href: '/services#analytics-&-bi' },
        { name: 'MLOps & AI', href: '/services#mlops-&-ai' },
        { name: 'Managed Services', href: '/services#managed-services' },
        { name: 'Enterprise Training', href: '/services#enterprise-training' }
      ]
    },
    {
      name: 'Training',
      href: '/training',
      dropdown: [
        { name: 'Ripotek Academy', href: '/training' },
        { name: 'All Programs', href: '/training#our-programs' },
        { name: 'Power BI Analyst', href: '/training#power-bi-analyst' },
        { name: 'Azure Data Engineer', href: '/training#azure-data-engineer' },
        { name: 'Databricks Engineer', href: '/training#databricks-engineer' },
        { name: 'AI Engineer', href: '/training#ai-engineer' },
        { name: 'BI Analyst', href: '/training#business-intelligence-analyst' },
        { name: 'Prompt Engineering', href: '/training#prompt-engineering' },
        { name: 'Python for Data', href: '/training#python-for-data' },
        { name: 'ADF Masterclass', href: '/training#azure-data-factory-masterclass' }
      ]
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Careers', href: '/careers' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95'}`}>
        <div className="w-full px-4 lg:px-8">
          <div className="flex items-center h-20">
            {/* Logo - Far Left */}
            <a href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition shrink-0">
              <Image src="/favicon.svg" alt="Ripotek logo" width={40} height={40} className="w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-lg" />
              <div>
                <div className="text-lg md:text-xl lg:text-2xl font-semibold tracking-tight bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent leading-none">Ripotek</div>
              </div>
            </a>

            {/* Desktop Navigation Links - Centered */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center">
              {navLinks.map((item, i) => (
                <div key={i} className="relative group">
                  <a href={item.href} className="text-gray-700 hover:text-teal-600 transition font-medium flex items-center gap-1 py-2 text-sm xl:text-base whitespace-nowrap">
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                  {item.dropdown && (
                    <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-lg shadow-xl py-2">
                        {item.dropdown.map((subItem) => (
                          <a key={subItem.name} href={subItem.href} className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors">{subItem.name}</a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Let's Talk Button - Far Right */}
            <a href="/contact" className="hidden lg:block bg-teal-600 text-white px-4 xl:px-6 py-2 rounded-lg hover:bg-teal-700 transition shadow-lg hover:shadow-xl whitespace-nowrap text-sm xl:text-base shrink-0">Let's Talk</a>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden ml-auto p-2 rounded-lg hover:bg-gray-100 bg-gray-50 border border-gray-300">
              {mobileMenuOpen ? <X className="w-7 h-7 text-gray-900 stroke-[2.5]" /> : <Menu className="w-7 h-7 text-gray-900 stroke-[2.5]" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block text-gray-700 hover:text-teal-600 transition font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="/contact" className="block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition font-semibold text-center">
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900"></div>

          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            key="pricing-video-unique"
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
            poster="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1920&h=1080&fit=crop"
          >
            <source src="https://cdn.coverr.co/videos/coverr-calculator-and-coins-on-desk-8791/1080p.mp4?v=2" type="video/mp4" />
            <source src="https://cdn.coverr.co/videos/coverr-financial-planning-with-documents-8792/1080p.mp4?v=2" type="video/mp4" />
          </video>

          {/* Animated grid pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
              animation: 'gridFlow 20s linear infinite'
            }}></div>
          </div>

          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-teal-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

          {/* Floating themed icons */}
          <div className="absolute top-1/4 right-1/4 w-12 h-12 border-2 border-teal-400/30 rounded-full animate-float hidden md:flex items-center justify-center">
            <Calculator className="w-6 h-6 text-teal-400/40" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border-2 border-blue-400/30 rounded-lg animate-float hidden md:flex items-center justify-center" style={{animationDelay: '1s'}}>
            <TrendingUp className="w-8 h-8 text-blue-400/40" />
          </div>
          <div className="absolute top-1/2 right-1/3 w-10 h-10 border-2 border-cyan-400/30 rounded-full animate-float hidden md:flex items-center justify-center" style={{animationDelay: '2s'}}>
            <CheckCircle className="w-5 h-5 text-cyan-400/40" />
          </div>

          {/* Scanline effect */}
          <div className="absolute inset-0 opacity-10" style={{
            background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, transparent 2px, transparent 4px)',
            pointerEvents: 'none'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-30">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="animate-fadeIn">
              <Calculator className="w-16 h-16 text-teal-400 mx-auto mb-4" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white md:whitespace-nowrap animate-fadeInUp">
              <span className="text-white">Investment </span>
              <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Calculator</span>
            </h1>
            <p className="text-base md:text-xl text-gray-200 mx-auto md:whitespace-nowrap animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              Get an instant estimate for your data transformation project or training program
            </p>
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
          }

          @keyframes gridFlow {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(50px);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8">
              {/* Service Type */}
              <div className="mb-8">
                <label className="block text-lg font-bold text-gray-900 mb-4">What do you need?</label>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setServiceType('consulting')}
                    className={`p-6 rounded-xl border-2 transition ${
                      serviceType === 'consulting'
                        ? 'border-teal-600 bg-teal-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <TrendingUp className="w-8 h-8 text-teal-600 mb-2" />
                    <div className="font-bold text-gray-900">Consulting Services</div>
                    <div className="text-sm text-gray-600">Data platform, BI, AI/ML</div>
                  </button>
                  <button
                    onClick={() => setServiceType('training')}
                    className={`p-6 rounded-xl border-2 transition ${
                      serviceType === 'training'
                        ? 'border-teal-600 bg-teal-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Users className="w-8 h-8 text-teal-600 mb-2" />
                    <div className="font-bold text-gray-900">Training Programs</div>
                    <div className="text-sm text-gray-600">Individual or Team upskilling</div>
                  </button>
                </div>
                {serviceType === 'consulting' && (
                  <div className="mt-4">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Select Consulting Service</label>
                    <select
                      value={selectedConsultingService}
                      onChange={(e) => setSelectedConsultingService(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      {consultingServices.map((svc) => (
                        <option key={svc} value={svc}>{svc}</option>
                      ))}
                    </select>
                  </div>
                )}
                {serviceType === 'training' && (
                  <div className="mt-4">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Select Training Program</label>
                    <select
                      value={selectedTrainingProgram}
                      onChange={(e) => setSelectedTrainingProgram(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      {Object.keys(trainingProgramPrices).map((prog) => (
                        <option key={prog} value={prog}>
                          {prog} — CAD ${trainingProgramPrices[prog].toLocaleString('en-CA')}
                        </option>
                      ))}
                    </select>
                    <p className="text-sm text-gray-600 mt-2">Price is per person. Total updates with team size.</p>
                  </div>
                )}
              </div>

              {/* Project Scope (Consulting only) */}
              {serviceType === 'consulting' && (
                <div className="mb-8">
                  <label className="block text-lg font-bold text-gray-900 mb-4">Project Scope</label>
                  <div className="grid md:grid-cols-4 gap-3">
                    {[
                      { value: 'small', label: 'Discovery', desc: '2-4 weeks' },
                      { value: 'medium', label: 'Standard', desc: '3-6 months' },
                      { value: 'large', label: 'Advanced', desc: '6-9 months' },
                      { value: 'enterprise', label: 'Enterprise', desc: '9-12 months' }
                    ].map((scope) => (
                      <button
                        key={scope.value}
                        onClick={() => setProjectScope(scope.value)}
                        className={`p-4 rounded-lg border-2 transition text-center ${
                          projectScope === scope.value
                            ? 'border-teal-600 bg-teal-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-bold text-gray-900 text-sm">{scope.label}</div>
                        <div className="text-xs text-gray-600">{scope.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Timeline (Consulting only) */}
              {serviceType === 'consulting' && (
                <div className="mb-8">
                  <label className="block text-lg font-bold text-gray-900 mb-4">Timeline Preference</label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { value: 'rush', label: 'Rush', desc: '+25% fee', icon: '🚀' },
                      { value: 'standard', label: 'Standard', desc: 'Best value', icon: '✓' },
                      { value: 'extended', label: 'Flexible', desc: '-10% discount', icon: '📅' }
                    ].map((time) => (
                      <button
                        key={time.value}
                        onClick={() => setTimeline(time.value)}
                        className={`p-4 rounded-lg border-2 transition ${
                          timeline === time.value
                            ? 'border-teal-600 bg-teal-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-2xl mb-2">{time.icon}</div>
                        <div className="font-bold text-gray-900">{time.label}</div>
                        <div className="text-sm text-gray-600">{time.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Team Size */}
              <div className="mb-8">
                <label className="block text-lg font-bold text-gray-900 mb-4">
                  {serviceType === 'consulting' ? 'Consultant Team Size' : 'Number of Students'}
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setTeamSize(Math.max(1, teamSize - 1))}
                    className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold text-xl"
                  >
                    -
                  </button>
                  <div className="flex-1 text-center">
                    <div className="text-4xl font-bold text-teal-600">{teamSize}</div>
                    <div className="text-sm text-gray-600">
                      {serviceType === 'consulting' ? 'Consultants' : 'Students'}
                    </div>
                  </div>
                  <button
                    onClick={() => setTeamSize(teamSize + 1)}
                    className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold text-xl"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add-ons (Consulting only) */}
              {serviceType === 'consulting' && (
                <div className="mb-8">
                  <label className="block text-lg font-bold text-gray-900 mb-4">Add-ons</label>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 rounded-lg border-2 border-gray-200 hover:border-gray-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={managedServices}
                        onChange={(e) => setManagedServices(e.target.checked)}
                        className="w-5 h-5 text-teal-600 rounded"
                      />
                      <div className="ml-4 flex-1">
                        <div className="font-bold text-gray-900">Managed Services</div>
                        <div className="text-sm text-gray-600">24/7 monitoring, optimization, support</div>
                      </div>
                      <div className="text-teal-600 font-bold">+CAD $8K-$25K/mo</div>
                    </label>

                    <label className="flex items-center p-4 rounded-lg border-2 border-gray-200 hover:border-gray-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={training}
                        onChange={(e) => setTraining(e.target.checked)}
                        className="w-5 h-5 text-teal-600 rounded"
                      />
                      <div className="ml-4 flex-1">
                        <div className="font-bold text-gray-900">Team Training</div>
                        <div className="text-sm text-gray-600">Knowledge transfer workshops</div>
                      </div>
                      <div className="text-teal-600 font-bold">+CAD $15K</div>
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Estimate Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-900 to-teal-900 rounded-2xl shadow-xl p-8 text-white sticky top-24">
                <h3 className="text-2xl font-bold mb-6">Your Estimate</h3>

                {/* Total Investment */}
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
                  <div className="text-sm text-gray-300 mb-2">Total Investment</div>
                  <div className="text-4xl font-bold mb-2">{formatCurrency(estimate)}</div>
                  <div className="text-sm text-gray-300">
                    {serviceType === 'consulting' ? 'One-time project cost' : `${teamSize} student${teamSize > 1 ? 's' : ''}`}
                  </div>
                </div>

                {/* Monthly (if applicable) */}
                {monthlyEstimate > 0 && (
                  <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
                    <div className="text-sm text-gray-300 mb-2">Monthly (Managed Services)</div>
                    <div className="text-3xl font-bold mb-2">{formatCurrency(monthlyEstimate)}</div>
                    <div className="text-sm text-gray-300">Ongoing support & optimization</div>
                  </div>
                )}

                {/* Details */}
                <div className="space-y-4 mb-6 pb-6 border-b border-white/20">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-teal-400" />
                    <div>
                      <div className="text-sm text-gray-300">Timeline</div>
                      <div className="font-semibold">{getTimelineEstimate()}</div>
                    </div>
                  </div>

                  {serviceType === 'consulting' && getROIEstimate() && (
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-teal-400" />
                      <div>
                        <div className="text-sm text-gray-300">Expected ROI</div>
                        <div className="font-semibold">{formatCurrency(getROIEstimate())}</div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-teal-400" />
                    <div>
                      <div className="text-sm text-gray-300">Team Size</div>
                      <div className="font-semibold">{teamSize} {serviceType === 'consulting' ? 'consultants' : 'students'}</div>
                    </div>
                  </div>
                </div>

                {/* What's Included */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-300 mb-3">What's Included:</div>
                  <div className="space-y-2">
                    {serviceType === 'consulting' ? (
                      <>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>Discovery & assessment</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>Platform implementation</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>Testing & deployment</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>Documentation</span>
                        </div>
                        {training && (
                          <div className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                            <span>Team training workshops</span>
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>Live instructor-led sessions</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>Hands-on projects</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>One-on-one mentorship</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>Career coaching</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>Job placement assistance</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-3">
                  <a href="/contact#send-message" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition">
                    <Mail className="w-5 h-5" />
                    Request Detailed Proposal
                  </a>
                  <button onClick={handleDownloadEstimatePDF} className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition border border-white/20">
                    <Download className="w-5 h-5" />
                    Download Estimate PDF
                  </button>
                </div>

                {/* Disclaimer */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-start gap-2 text-xs text-gray-300">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>This is an estimate only. Final pricing will be provided after discovery call and detailed assessment.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Talk</h3>
            <p className="text-gray-600 mb-6">Book a free 30-minute discovery call to discuss your specific needs and get a detailed proposal.</p>
            <button
              onClick={() => setDiscoveryCallModalOpen(true)}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Discovery Call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 mb-12">
            <div className="md:col-span-6">
              <div className="flex items-center gap-4 mb-4">
                <Image src="/favicon.svg" alt="Ripotek logo" width={40} height={40} className="w-10 h-10 rounded-lg" />
                <div className="min-w-0">
                  <span className="font-semibold text-base md:text-lg tracking-tight leading-tight block text-left truncate pb-px">Ripotek Technologies Inc.</span>
                  <span className="text-white text-[8px] md:text-[10px] italic font-normal leading-none mt-0.5 block text-left">Design. Engineer. Deliver.</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                Enterprise data consulting and training services. Empowering organizations with governed self-service BI, Azure modernization, and industry-leading expertise.
              </p>
              <div className="mt-6 space-y-3 text-gray-300 text-sm">
                <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-gray-300" /> Calgary, Alberta, Canada</div>
                <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-gray-300" /> info@ripotek.com</div>
                <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-gray-300" /> +1 587-259-0033</div>
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold mb-6 text-sm">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/services#data-platform-build" className="text-gray-300 hover:text-teal-400 transition">Data Engineering</a></li>
                <li><a href="/services#analytics-&-bi" className="text-gray-300 hover:text-teal-400 transition">Analytics & BI</a></li>
                <li><a href="/services#mlops-&-ai" className="text-gray-300 hover:text-teal-400 transition">AI & MLOps</a></li>
                <li><a href="/services#managed-services" className="text-gray-300 hover:text-teal-400 transition">Managed Services</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold mb-6 text-sm">Training</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/training#power-bi-analyst" className="text-gray-300 hover:text-teal-400 transition">Power BI Analyst</a></li>
                <li><a href="/training#azure-data-engineer" className="text-gray-300 hover:text-teal-400 transition">Azure Data Engineer</a></li>
                <li><a href="/training#databricks-engineer" className="text-gray-300 hover:text-teal-400 transition">Databricks Engineer</a></li>
                <li><a href="/training#ai-engineer" className="text-gray-300 hover:text-teal-400 transition">AI Engineer</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold mb-6 text-sm">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/about" className="text-gray-300 hover:text-teal-400 transition">About Us</a></li>
                <li><a href="/case-studies" className="text-gray-300 hover:text-teal-400 transition">Case Studies</a></li>
                <li><a href="/blog" className="text-gray-300 hover:text-teal-400 transition">Blog</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-teal-400 transition">Careers</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-teal-400 transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
              <p className="text-gray-300 text-sm">© 2023-2025 Ripotek Technologies Inc. All rights reserved.</p>
              <div className="flex gap-6 text-sm text-gray-300">
                <a href="/privacy-policy" className="hover:text-teal-400 transition">Privacy Policy</a>
                <a href="/terms-of-service" className="hover:text-teal-400 transition">Terms of Service</a>
                <a href="/refund-policy" className="hover:text-teal-400 transition">Refund Policy</a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center gap-6 pt-6 border-t border-gray-800">
              <a href="https://linkedin.com/company/ripotek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="LinkedIn">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61583595044786" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="Facebook">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/ripotekdata" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="Instagram">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/Ripotek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="X (Twitter)">
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@ripotekacademy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="YouTube">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="https://github.com/ripotek-technologies" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="GitHub">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Discovery Call Modal */}
      <DiscoveryCallModal
        isOpen={discoveryCallModalOpen}
        onClose={() => setDiscoveryCallModalOpen(false)}
        portalId="342603298"
        formId="c4816a09-06d8-485e-baf9-8f7dfd14604e"
        region="na3"
      />
    </div>
  );
}
