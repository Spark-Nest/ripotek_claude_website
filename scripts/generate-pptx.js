const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

// Create a new presentation
const pptx = new pptxgen();

// Set presentation properties
pptx.author = 'Ripotek Technologies Inc.';
pptx.title = 'Ripotek Capabilities Deck 2026';
pptx.subject = 'Enterprise Data & AI Solutions';
pptx.company = 'Ripotek Technologies Inc.';

// Define colors
const colors = {
  darkBlue: '0f172a',
  teal: '06b6d4',
  cyan: '22d3ee',
  blue: '1e3a8a',
  lightBlue: '3b82f6',
  white: 'FFFFFF',
  gray: '64748b',
  darkGray: '1e293b',
  lightGray: 'f8fafc',
};

// Slide 1: Cover
let slide1 = pptx.addSlide();
slide1.background = { color: colors.darkBlue };
slide1.addText('Ripotek', { x: 0.5, y: 0.4, fontSize: 28, bold: true, color: colors.white });
slide1.addText('CAPABILITIES DECK 2026', { x: 7, y: 0.5, fontSize: 12, color: colors.gray });
slide1.addText('RIPOTEK TECHNOLOGIES INC.', { x: 0.5, y: 2.5, fontSize: 14, color: colors.teal, bold: true });
slide1.addText('Transform Data Into\nStrategic Advantage', { x: 0.5, y: 3, fontSize: 48, bold: true, color: colors.white, breakLine: true });
slide1.addText('Design. Engineer. Deliver.', { x: 0.5, y: 4.8, fontSize: 24, color: 'e2e8f0' });
slide1.addText('www.ripotek.com  |  info@ripotek.com', { x: 0.5, y: 6.8, fontSize: 12, color: colors.gray });

// Slide 2: Who We Are
let slide2 = pptx.addSlide();
slide2.background = { color: colors.white };
slide2.addText('Company Overview', { x: 0.5, y: 0.3, fontSize: 12, color: colors.teal, bold: true });
slide2.addText('Who We Are', { x: 0.5, y: 0.6, fontSize: 32, bold: true, color: colors.darkGray });
slide2.addText("Calgary's Premier Data & AI Consultancy", { x: 0.5, y: 1.4, fontSize: 20, bold: true, color: colors.blue });
slide2.addText('Ripotek Technologies empowers enterprises to transform their data into strategic assets. We specialize in modernizing data infrastructure, implementing advanced analytics, and building production-ready AI solutions that drive real business value.', { x: 0.5, y: 2, w: 5, fontSize: 12, color: colors.gray });
// Stats
const stats2 = [
  { num: '50+', label: 'Enterprise Clients' },
  { num: '2,000+', label: 'Professionals Trained' },
  { num: '$12M+', label: 'Client Value Delivered' },
  { num: '85%', label: 'Training Placement Rate' },
];
stats2.forEach((stat, i) => {
  slide2.addText(stat.num, { x: 6.5, y: 1.5 + i * 1, fontSize: 24, bold: true, color: colors.darkGray });
  slide2.addText(stat.label, { x: 6.5, y: 1.85 + i * 1, fontSize: 11, color: colors.gray });
});

// Slide 3: Our Impact
let slide3 = pptx.addSlide();
slide3.background = { color: colors.white };
slide3.addText('Our Impact', { x: 0.5, y: 0.3, fontSize: 12, color: colors.teal, bold: true });
slide3.addText('Real outcomes that drive business transformation', { x: 0.5, y: 0.6, fontSize: 28, bold: true, color: colors.darkGray });
const metrics = [
  { value: '50+', label: 'Enterprise Clients', sub: 'Across Canada' },
  { value: '2,000+', label: 'Professionals Trained', sub: 'Since 2023' },
  { value: '$12M+', label: 'Client Value', sub: 'Measurable ROI Delivered' },
  { value: '85%', label: 'Job Placement Rate', sub: 'Within 90 Days' },
];
metrics.forEach((m, i) => {
  const x = 0.5 + i * 2.3;
  slide3.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y: 2, w: 2.1, h: 2.2, fill: { color: 'f0f9ff' }, line: { color: 'bae6fd', pt: 1 } });
  slide3.addText(m.value, { x, y: 2.3, w: 2.1, fontSize: 28, bold: true, color: colors.darkGray, align: 'center' });
  slide3.addText(m.label, { x, y: 3, w: 2.1, fontSize: 12, bold: true, color: colors.darkGray, align: 'center' });
  slide3.addText(m.sub, { x, y: 3.4, w: 2.1, fontSize: 10, color: colors.gray, align: 'center' });
});

// Slide 4: What We Do - Overview
let slide4 = pptx.addSlide();
slide4.background = { color: colors.darkBlue };
slide4.addText('What We Do', { x: 0.5, y: 0.3, fontSize: 12, color: colors.cyan, bold: true });
slide4.addText('End-to-End Data & AI Solutions', { x: 0.5, y: 2.5, fontSize: 42, bold: true, color: colors.white, align: 'center', w: 9 });
slide4.addText('From strategy to implementation, we deliver comprehensive solutions that transform how enterprises leverage data.', { x: 1, y: 3.8, w: 8, fontSize: 18, color: 'cbd5e1', align: 'center' });

// Slide 5: Service Pillars
let slide5 = pptx.addSlide();
slide5.background = { color: colors.white };
slide5.addText('Our Services', { x: 0.5, y: 0.3, fontSize: 12, color: colors.teal, bold: true });
slide5.addText('Six Pillars of Excellence', { x: 0.5, y: 0.6, fontSize: 28, bold: true, color: colors.darkGray });
const services = [
  { title: 'Strategy & Governance', desc: 'Data strategy, governance frameworks, COE setup' },
  { title: 'Data Platform Build', desc: 'Azure, Databricks, Fabric implementations' },
  { title: 'Analytics & BI', desc: 'Power BI, semantic models, self-service analytics' },
  { title: 'MLOps & AI', desc: 'Production AI, GenAI integration, ML pipelines' },
  { title: 'Managed Services', desc: '24/7 support, optimization, health monitoring' },
  { title: 'Enterprise Training', desc: 'Bootcamps, certifications, knowledge transfer' },
];
services.forEach((s, i) => {
  const row = Math.floor(i / 3);
  const col = i % 3;
  const x = 0.5 + col * 3.1;
  const y = 1.5 + row * 2.2;
  slide5.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w: 2.9, h: 1.8, fill: { color: colors.lightGray }, line: { color: 'e2e8f0', pt: 1 } });
  slide5.addText(s.title, { x: x + 0.2, y: y + 0.3, w: 2.5, fontSize: 14, bold: true, color: colors.darkGray });
  slide5.addText(s.desc, { x: x + 0.2, y: y + 0.8, w: 2.5, fontSize: 10, color: colors.gray });
});

// Slide 6: Industries
let slide6 = pptx.addSlide();
slide6.background = { color: colors.white };
slide6.addText('Industries We Serve', { x: 0.5, y: 0.3, fontSize: 12, color: colors.teal, bold: true });
slide6.addText('Deep Expertise Across Sectors', { x: 0.5, y: 0.6, fontSize: 28, bold: true, color: colors.darkGray });
const industries = ['Energy & Utilities', 'Financial Services', 'Public Sector', 'Healthcare'];
industries.forEach((ind, i) => {
  const x = 0.5 + i * 2.3;
  slide6.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y: 1.8, w: 2.1, h: 1.5, fill: { color: colors.lightGray }, line: { color: 'e2e8f0', pt: 1 } });
  slide6.addText(ind, { x, y: 2.3, w: 2.1, fontSize: 14, bold: true, color: colors.darkGray, align: 'center' });
});

// Slide 7: Our Team
let slide7 = pptx.addSlide();
slide7.background = { color: colors.white };
slide7.addText('Our Team', { x: 0.5, y: 0.3, fontSize: 12, color: colors.teal, bold: true });
slide7.addText('World-Class Expertise', { x: 0.5, y: 0.6, fontSize: 28, bold: true, color: colors.darkGray });
const team = [
  { name: 'Prince Andrew', role: 'CEO & Founder', desc: '12+ years in enterprise data systems' },
  { name: 'Sarah Chen', role: 'Chief Technology Officer', desc: '15+ years Fortune 500 data architecture' },
  { name: 'Dr. Priya Sharma', role: 'VP of AI & Innovation', desc: 'PhD in ML, 10+ years AI/ML' },
  { name: 'David Thompson', role: 'VP of Training', desc: '2,000+ students trained, 85% placement' },
];
team.forEach((t, i) => {
  const x = 0.5 + i * 2.3;
  slide7.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y: 1.5, w: 2.1, h: 2.5, fill: { color: colors.white }, line: { color: 'e2e8f0', pt: 1 } });
  slide7.addText(t.name, { x, y: 2.2, w: 2.1, fontSize: 14, bold: true, color: colors.darkGray, align: 'center' });
  slide7.addText(t.role, { x, y: 2.55, w: 2.1, fontSize: 10, color: colors.teal, align: 'center' });
  slide7.addText(t.desc, { x: x + 0.1, y: 2.9, w: 1.9, fontSize: 9, color: colors.gray, align: 'center' });
});
// Stats bar
slide7.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 4.5, w: 9, h: 1, fill: { color: colors.lightGray } });
slide7.addText('50+ Years Combined Experience  |  40+ Professional Certifications  |  Fortune 500 Project Experience', { x: 0.5, y: 4.8, w: 9, fontSize: 12, color: colors.darkGray, align: 'center' });

// Slide 8: Services Overview Divider
let slide8 = pptx.addSlide();
slide8.background = { color: colors.darkBlue };
slide8.addText('Comprehensive Solutions', { x: 0.5, y: 2, fontSize: 14, color: colors.cyan, bold: true, align: 'center', w: 9 });
slide8.addText('Our Services', { x: 0.5, y: 2.5, fontSize: 52, bold: true, color: colors.white, align: 'center', w: 9 });

// Slide 9-15: Individual Services (abbreviated for space)
const serviceDetails = [
  { title: 'Strategy & Governance', subtitle: 'Foundation for Data Excellence', items: ['Data Strategy Development', 'Governance Framework Design', 'Center of Excellence Setup', 'Data Quality Programs'] },
  { title: 'Data Platform Build', subtitle: 'Modern Data Infrastructure', items: ['Azure Data Platform', 'Databricks Lakehouse', 'Microsoft Fabric', 'Data Migration'] },
  { title: 'Analytics & BI', subtitle: 'Insights That Drive Action', items: ['Power BI Implementation', 'Semantic Models', 'Self-Service Analytics', 'Embedded Analytics'] },
  { title: 'MLOps & AI', subtitle: 'Production-Grade AI', items: ['GenAI Integration', 'ML Pipeline Development', 'Model Monitoring', 'Azure OpenAI Solutions'] },
  { title: 'Managed Services', subtitle: '24/7 Expert Support', items: ['Platform Monitoring', 'Performance Optimization', 'Incident Response', 'Continuous Improvement'] },
  { title: 'Enterprise Training', subtitle: 'Build Internal Capability', items: ['Custom Bootcamps', 'Certification Prep', 'Knowledge Transfer', 'Team Upskilling'] },
];

serviceDetails.forEach((svc, i) => {
  let slide = pptx.addSlide();
  slide.background = { color: colors.white };
  slide.addText('Services', { x: 0.5, y: 0.3, fontSize: 12, color: colors.teal, bold: true });
  slide.addText(svc.title, { x: 0.5, y: 0.6, fontSize: 28, bold: true, color: colors.darkGray });
  slide.addText(svc.subtitle, { x: 0.5, y: 1.2, fontSize: 16, color: colors.blue });
  svc.items.forEach((item, j) => {
    slide.addText('• ' + item, { x: 0.7, y: 2 + j * 0.5, fontSize: 14, color: colors.darkGray });
  });
});

// Slide 16: Technology Partners
let slide16 = pptx.addSlide();
slide16.background = { color: colors.white };
slide16.addText('Ecosystem & Expertise', { x: 0.5, y: 0.3, fontSize: 12, color: colors.teal, bold: true });
slide16.addText('Technology Partners', { x: 0.5, y: 0.6, fontSize: 28, bold: true, color: colors.darkGray });
const partners = ['Microsoft Azure', 'Databricks', 'Microsoft Fabric', 'Power BI', 'Snowflake', 'AWS', 'Google Cloud'];
partners.forEach((p, i) => {
  const row = Math.floor(i / 4);
  const col = i % 4;
  const x = 0.5 + col * 2.3;
  const y = 1.5 + row * 1.8;
  slide16.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w: 2.1, h: 1.4, fill: { color: colors.white }, line: { color: 'e2e8f0', pt: 1 } });
  slide16.addText(p, { x, y: y + 0.5, w: 2.1, fontSize: 12, bold: true, color: colors.darkGray, align: 'center' });
});
// Certifications bar
slide16.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 5, w: 9, h: 1.2, fill: { color: colors.blue } });
slide16.addText('40+ Azure Certifications  |  Databricks Certified Architects  |  Power BI Specialists', { x: 0.5, y: 5.4, w: 9, fontSize: 14, bold: true, color: colors.white, align: 'center' });

// Slide 17: Delivery Methodology
let slide17 = pptx.addSlide();
slide17.background = { color: colors.white };
slide17.addText('How We Work', { x: 0.5, y: 0.3, fontSize: 12, color: colors.teal, bold: true });
slide17.addText('Our Delivery Methodology', { x: 0.5, y: 0.6, fontSize: 28, bold: true, color: colors.darkGray });
const phases = [
  { num: '1', title: 'Discovery', duration: '2-4 Weeks' },
  { num: '2', title: 'Implementation', duration: '3-6 Months' },
  { num: '3', title: 'Support', duration: 'Ongoing' },
];
phases.forEach((p, i) => {
  const x = 1 + i * 3;
  slide17.addShape(pptx.shapes.OVAL, { x: x + 0.8, y: 2, w: 0.8, h: 0.8, fill: { color: colors.blue } });
  slide17.addText(p.num, { x: x + 0.8, y: 2.15, w: 0.8, fontSize: 20, bold: true, color: colors.white, align: 'center' });
  slide17.addText(p.title, { x, y: 3, w: 2.4, fontSize: 18, bold: true, color: colors.darkGray, align: 'center' });
  slide17.addText(p.duration, { x, y: 3.5, w: 2.4, fontSize: 12, color: colors.teal, align: 'center' });
});

// Slide 18-20: Case Studies Section
let slide18 = pptx.addSlide();
slide18.background = { color: colors.darkBlue };
slide18.addText('Success Stories', { x: 0.5, y: 2, fontSize: 14, color: colors.cyan, bold: true, align: 'center', w: 9 });
slide18.addText('Case Studies', { x: 0.5, y: 2.5, fontSize: 52, bold: true, color: colors.white, align: 'center', w: 9 });

// Example case studies
const caseStudies = [
  { client: 'Major Energy Company', challenge: 'Legacy data warehouse modernization', solution: 'Azure Databricks lakehouse', result: '60% cost reduction, 10x faster queries' },
  { client: 'Financial Services Firm', challenge: 'Real-time fraud detection', solution: 'Azure ML + Databricks streaming', result: '85% fraud detection improvement' },
];
caseStudies.forEach((cs, i) => {
  let slide = pptx.addSlide();
  slide.background = { color: colors.white };
  slide.addText('Case Study', { x: 0.5, y: 0.3, fontSize: 12, color: colors.teal, bold: true });
  slide.addText(cs.client, { x: 0.5, y: 0.6, fontSize: 28, bold: true, color: colors.darkGray });
  slide.addText('Challenge:', { x: 0.5, y: 1.5, fontSize: 14, bold: true, color: colors.blue });
  slide.addText(cs.challenge, { x: 0.5, y: 1.9, fontSize: 14, color: colors.darkGray });
  slide.addText('Solution:', { x: 0.5, y: 2.5, fontSize: 14, bold: true, color: colors.blue });
  slide.addText(cs.solution, { x: 0.5, y: 2.9, fontSize: 14, color: colors.darkGray });
  slide.addText('Result:', { x: 0.5, y: 3.5, fontSize: 14, bold: true, color: colors.blue });
  slide.addText(cs.result, { x: 0.5, y: 3.9, fontSize: 14, color: colors.teal, bold: true });
});

// Slide 21: Training Section Divider
let slide21 = pptx.addSlide();
slide21.background = { color: colors.darkBlue };
slide21.addText('Ripotek Academy', { x: 0.5, y: 2, fontSize: 14, color: colors.cyan, bold: true, align: 'center', w: 9 });
slide21.addText('Professional Training', { x: 0.5, y: 2.5, fontSize: 52, bold: true, color: colors.white, align: 'center', w: 9 });
slide21.addText('Launch Your Data Career', { x: 0.5, y: 3.5, fontSize: 20, color: 'cbd5e1', align: 'center', w: 9 });

// Slide 22: Training Programs
let slide22 = pptx.addSlide();
slide22.background = { color: colors.white };
slide22.addText('Launch Your Data Career', { x: 0.5, y: 0.3, fontSize: 12, color: colors.teal, bold: true });
slide22.addText('Training Programs', { x: 0.5, y: 0.6, fontSize: 28, bold: true, color: colors.darkGray });
const programs = [
  { title: 'Power BI Analyst', duration: '12 Weeks', price: '$700' },
  { title: 'Python for Data', duration: '12 Weeks', price: '$700' },
  { title: 'Prompt Engineering', duration: '12 Weeks', price: '$700' },
  { title: 'Azure Data Engineer', duration: '24 Weeks', price: '$1,500' },
  { title: 'Databricks Engineer', duration: '24 Weeks', price: '$1,500' },
  { title: 'AI Engineer', duration: '24 Weeks', price: '$1,800' },
  { title: 'BI Analyst', duration: '12 Weeks', price: '$700' },
  { title: 'Azure Data Factory', duration: '12 Weeks', price: '$1,000' },
];
programs.forEach((prog, i) => {
  const row = Math.floor(i / 4);
  const col = i % 4;
  const x = 0.5 + col * 2.3;
  const y = 1.3 + row * 2;
  slide22.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w: 2.1, h: 1.6, fill: { color: colors.white }, line: { color: 'e2e8f0', pt: 1 } });
  slide22.addText(prog.title, { x: x + 0.1, y: y + 0.3, w: 1.9, fontSize: 12, bold: true, color: colors.darkGray });
  slide22.addText(prog.duration, { x: x + 0.1, y: y + 0.7, w: 1.9, fontSize: 10, color: colors.gray });
  slide22.addText(prog.price, { x: x + 0.1, y: y + 1.1, w: 1.9, fontSize: 12, bold: true, color: colors.darkGray });
});
// Stats bar
slide22.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 5.5, w: 9, h: 0.8, fill: { color: colors.blue } });
slide22.addText('85% Placement Rate  |  90 Days Avg. Time to Hire  |  2,000+ Students Trained', { x: 0.5, y: 5.7, w: 9, fontSize: 12, bold: true, color: colors.white, align: 'center' });

// Slide 23: Training-to-Hire Model
let slide23 = pptx.addSlide();
slide23.background = { color: colors.white };
slide23.addText('Career Journey', { x: 0.5, y: 0.3, fontSize: 12, color: colors.teal, bold: true });
slide23.addText('Training-to-Hire Model', { x: 0.5, y: 0.6, fontSize: 28, bold: true, color: colors.darkGray });
slide23.addText("We don't just teach skills; we build careers. Our integrated model ensures you are job-ready from day one.", { x: 0.5, y: 1.2, w: 8, fontSize: 14, color: colors.gray });
const steps = ['Live Training', 'Portfolio Building', 'Mentorship', 'Interview Prep', 'Partner Intros', 'Job Placement'];
steps.forEach((step, i) => {
  const x = 0.5 + i * 1.5;
  slide23.addShape(pptx.shapes.OVAL, { x: x + 0.25, y: 2.5, w: 0.6, h: 0.6, fill: { color: colors.teal } });
  slide23.addText((i + 1).toString(), { x: x + 0.25, y: 2.6, w: 0.6, fontSize: 14, bold: true, color: colors.white, align: 'center' });
  slide23.addText(step, { x, y: 3.3, w: 1.1, fontSize: 10, color: colors.darkGray, align: 'center' });
});

// Slide 24-26: Why Ripotek, Testimonials, etc.
let slide24 = pptx.addSlide();
slide24.background = { color: colors.white };
slide24.addText('Why Ripotek', { x: 0.5, y: 0.3, fontSize: 12, color: colors.teal, bold: true });
slide24.addText('Our Competitive Advantage', { x: 0.5, y: 0.6, fontSize: 28, bold: true, color: colors.darkGray });
const advantages = [
  { title: 'Industry Expertise', desc: '10+ years across Energy, Finance, Healthcare, Public Sector' },
  { title: 'Knowledge Transfer', desc: 'We train your teams to own the solutions we build' },
  { title: 'Proven Results', desc: '$12M+ measurable ROI delivered to clients' },
  { title: 'Modern Stack', desc: 'Azure, Databricks, Fabric, Power BI, cutting-edge AI' },
];
advantages.forEach((adv, i) => {
  const x = 0.5 + (i % 2) * 4.5;
  const y = 1.5 + Math.floor(i / 2) * 2;
  slide24.addText(adv.title, { x, y, fontSize: 16, bold: true, color: colors.blue });
  slide24.addText(adv.desc, { x, y: y + 0.4, w: 4, fontSize: 12, color: colors.gray });
});

// Slide 25: Client Testimonials
let slide25 = pptx.addSlide();
slide25.background = { color: colors.lightGray };
slide25.addText('Client Success', { x: 0.5, y: 0.3, fontSize: 12, color: colors.teal, bold: true });
slide25.addText('What Our Clients Say', { x: 0.5, y: 0.6, fontSize: 28, bold: true, color: colors.darkGray });
slide25.addText('"Ripotek transformed our data infrastructure in 6 months. The team\'s expertise in Azure and Databricks is unmatched."', { x: 1, y: 2, w: 8, fontSize: 16, color: colors.darkGray, italic: true });
slide25.addText('— VP of Analytics, Major Energy Corp', { x: 1, y: 3, fontSize: 12, color: colors.gray });

// Slide 26: Engagement Models
let slide26 = pptx.addSlide();
slide26.background = { color: colors.white };
slide26.addText('Flexible Partnerships', { x: 0.5, y: 0.3, fontSize: 12, color: colors.teal, bold: true });
slide26.addText('Engagement Models', { x: 0.5, y: 0.6, fontSize: 28, bold: true, color: colors.darkGray });
const models = [
  { title: 'Project-Based', desc: 'Fixed scope, timeline, and budget for defined deliverables' },
  { title: 'Staff Augmentation', desc: 'Skilled consultants embedded in your team' },
  { title: 'Managed Services', desc: 'Ongoing support and optimization' },
  { title: 'Training Programs', desc: 'Upskill your workforce with our academy' },
];
models.forEach((model, i) => {
  const x = 0.5 + (i % 2) * 4.5;
  const y = 1.5 + Math.floor(i / 2) * 2;
  slide26.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w: 4, h: 1.5, fill: { color: colors.lightGray }, line: { color: 'e2e8f0', pt: 1 } });
  slide26.addText(model.title, { x: x + 0.2, y: y + 0.3, fontSize: 14, bold: true, color: colors.blue });
  slide26.addText(model.desc, { x: x + 0.2, y: y + 0.7, w: 3.6, fontSize: 11, color: colors.gray });
});

// Slide 27: Next Steps / CTA
let slide27 = pptx.addSlide();
slide27.background = { color: colors.darkBlue };
slide27.addText("Let's Get Started", { x: 0.5, y: 2, fontSize: 14, color: colors.cyan, bold: true, align: 'center', w: 9 });
slide27.addText('Ready to Transform\nYour Data Strategy?', { x: 0.5, y: 2.5, fontSize: 42, bold: true, color: colors.white, align: 'center', w: 9 });
slide27.addText('Book a free discovery call to discuss your data challenges and goals.', { x: 1, y: 4, w: 8, fontSize: 16, color: 'cbd5e1', align: 'center' });

// Slide 28: Contact Us
let slide28 = pptx.addSlide();
slide28.background = { color: colors.white };
slide28.addText('Get In Touch', { x: 0.5, y: 0.3, fontSize: 12, color: colors.teal, bold: true });
slide28.addText('Contact Us', { x: 0.5, y: 0.6, fontSize: 28, bold: true, color: colors.darkGray });
slide28.addText('Headquarters', { x: 0.7, y: 1.5, fontSize: 14, bold: true, color: colors.darkGray });
slide28.addText('Calgary, Alberta, Canada', { x: 0.7, y: 1.9, fontSize: 12, color: colors.gray });
slide28.addText('Phone', { x: 0.7, y: 2.5, fontSize: 14, bold: true, color: colors.darkGray });
slide28.addText('+1 587-259-0033', { x: 0.7, y: 2.9, fontSize: 12, color: colors.gray });
slide28.addText('Website', { x: 0.7, y: 3.5, fontSize: 14, bold: true, color: colors.darkGray });
slide28.addText('www.ripotek.com', { x: 0.7, y: 3.9, fontSize: 12, color: colors.teal });
// Email section
slide28.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 5, y: 1.3, w: 4.5, h: 3.5, fill: { color: colors.blue } });
slide28.addText('info@ripotek.com', { x: 5.2, y: 1.7, fontSize: 12, color: colors.white });
slide28.addText('consulting@ripotek.com', { x: 5.2, y: 2.2, fontSize: 12, color: colors.white });
slide28.addText('training@ripotek.com', { x: 5.2, y: 2.7, fontSize: 12, color: colors.white });
slide28.addText('careers@ripotek.com', { x: 5.2, y: 3.2, fontSize: 12, color: colors.white });
slide28.addText('Design. Engineer. Deliver.', { x: 0.5, y: 5.5, w: 9, fontSize: 24, bold: true, color: colors.blue, align: 'center' });

// Slide 29: Appendix - Certifications & Tech Stack
let slide29 = pptx.addSlide();
slide29.background = { color: colors.white };
slide29.addText('Appendix', { x: 0.5, y: 0.3, fontSize: 12, color: colors.teal, bold: true });
slide29.addText('Certifications & Tech Stack', { x: 0.5, y: 0.6, fontSize: 28, bold: true, color: colors.darkGray });
// Certifications
const certs = [
  'Azure Solutions Architect Expert (5)',
  'Azure Data Engineer Associate (8)',
  'Databricks Data Engineer Pro (4)',
  'Power BI Data Analyst Associate (6)',
  'AWS Solutions Architect (2)',
];
slide29.addText('Team Certifications', { x: 0.5, y: 1.3, fontSize: 14, bold: true, color: colors.blue });
certs.forEach((cert, i) => {
  slide29.addText('• ' + cert, { x: 0.7, y: 1.7 + i * 0.4, fontSize: 11, color: colors.darkGray });
});
// Tech stack
const techStack = [
  'Cloud: Microsoft Azure, AWS, GCP',
  'Data: Databricks, Synapse, Fabric, Snowflake',
  'ETL: Azure Data Factory, Databricks Workflows, dbt',
  'BI: Power BI, Tableau, Analysis Services',
  'AI/ML: Azure OpenAI, Azure ML, LangChain',
];
slide29.addText('Technology Stack', { x: 5, y: 1.3, fontSize: 14, bold: true, color: colors.blue });
techStack.forEach((tech, i) => {
  slide29.addText('• ' + tech, { x: 5.2, y: 1.7 + i * 0.4, fontSize: 11, color: colors.darkGray });
});

// Save the presentation
const outputPath = path.join(__dirname, '..', 'public', 'ripotek-capabilities-deck.pptx');
pptx.writeFile({ fileName: outputPath })
  .then(fileName => {
    console.log(`PowerPoint file created: ${fileName}`);
  })
  .catch(err => {
    console.error('Error creating PowerPoint:', err);
  });
