const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Create a new PDF document (16:9 aspect ratio like slides)
const doc = new PDFDocument({
  size: [960, 540], // 16:9 aspect ratio
  margins: { top: 40, bottom: 40, left: 50, right: 50 },
  autoFirstPage: false
});

// Output file path
const outputPath = path.join(__dirname, '..', 'public', 'ripotek-capabilities-deck.pdf');
doc.pipe(fs.createWriteStream(outputPath));

// Define colors
const colors = {
  darkBlue: '#0f172a',
  teal: '#06b6d4',
  cyan: '#22d3ee',
  blue: '#1e3a8a',
  lightBlue: '#3b82f6',
  white: '#FFFFFF',
  gray: '#64748b',
  darkGray: '#1e293b',
  lightGray: '#f8fafc',
};

// Helper function to add a new slide
function addSlide(bgColor = colors.white) {
  doc.addPage();
  doc.rect(0, 0, 960, 540).fill(bgColor);
}

// Helper to add footer
function addFooter(slideNum) {
  doc.fontSize(8).fillColor(colors.gray);
  doc.text('Ripotek Technologies Inc. | Capabilities Deck', 50, 510);
  doc.text(slideNum.toString(), 900, 510, { align: 'right' });
}

// Slide 1: Cover
addSlide(colors.darkBlue);
doc.fontSize(24).fillColor(colors.white).text('Ripotek', 50, 40);
doc.fontSize(10).fillColor(colors.gray).text('CAPABILITIES DECK 2026', 750, 45);
doc.fontSize(12).fillColor(colors.teal).text('RIPOTEK TECHNOLOGIES INC.', 50, 180);
doc.fontSize(42).fillColor(colors.white).text('Transform Data Into', 50, 210);
doc.fontSize(42).fillColor(colors.cyan).text('Strategic Advantage', 50, 260);
doc.fontSize(20).fillColor('#e2e8f0').text('Design. Engineer. Deliver.', 50, 340);
doc.fontSize(10).fillColor(colors.gray).text('www.ripotek.com  |  info@ripotek.com', 50, 490);

// Slide 2: Who We Are
addSlide(colors.white);
doc.fontSize(10).fillColor(colors.teal).text('Company Overview', 50, 30);
doc.fontSize(28).fillColor(colors.darkGray).text('Who We Are', 50, 50);
doc.fontSize(18).fillColor(colors.blue).text("Calgary's Premier Data & AI Consultancy", 50, 110);
doc.fontSize(11).fillColor(colors.gray).text('Ripotek Technologies empowers enterprises to transform their data into strategic assets. We specialize in modernizing data infrastructure, implementing advanced analytics, and building production-ready AI solutions that drive real business value.', 50, 145, { width: 450 });
// Stats
const stats = [
  { num: '50+', label: 'Enterprise Clients' },
  { num: '2,000+', label: 'Professionals Trained' },
  { num: '$12M+', label: 'Client Value Delivered' },
  { num: '85%', label: 'Training Placement Rate' },
];
stats.forEach((stat, i) => {
  doc.fontSize(22).fillColor(colors.darkGray).text(stat.num, 600, 120 + i * 80);
  doc.fontSize(10).fillColor(colors.gray).text(stat.label, 600, 145 + i * 80);
});
addFooter(2);

// Slide 3: Our Impact
addSlide(colors.white);
doc.fontSize(10).fillColor(colors.teal).text('Our Impact', 50, 30);
doc.fontSize(26).fillColor(colors.darkGray).text('Real outcomes that drive business transformation', 50, 50);
const metrics = [
  { value: '50+', label: 'Enterprise Clients', sub: 'Across Canada' },
  { value: '2,000+', label: 'Professionals Trained', sub: 'Since 2023' },
  { value: '$12M+', label: 'Client Value', sub: 'Measurable ROI' },
  { value: '85%', label: 'Job Placement', sub: 'Within 90 Days' },
];
metrics.forEach((m, i) => {
  const x = 60 + i * 220;
  doc.roundedRect(x, 150, 200, 180, 10).fill('#f0f9ff');
  doc.fontSize(28).fillColor(colors.darkGray).text(m.value, x, 190, { width: 200, align: 'center' });
  doc.fontSize(12).fillColor(colors.darkGray).text(m.label, x, 240, { width: 200, align: 'center' });
  doc.fontSize(10).fillColor(colors.gray).text(m.sub, x, 270, { width: 200, align: 'center' });
});
addFooter(3);

// Slide 4: What We Do - Section Divider
addSlide(colors.darkBlue);
doc.fontSize(12).fillColor(colors.cyan).text('What We Do', 50, 200, { width: 860, align: 'center' });
doc.fontSize(40).fillColor(colors.white).text('End-to-End Data & AI Solutions', 50, 230, { width: 860, align: 'center' });
doc.fontSize(16).fillColor('#cbd5e1').text('From strategy to implementation, we deliver comprehensive solutions that transform how enterprises leverage data.', 100, 310, { width: 760, align: 'center' });

// Slide 5: Service Pillars
addSlide(colors.white);
doc.fontSize(10).fillColor(colors.teal).text('Our Services', 50, 30);
doc.fontSize(26).fillColor(colors.darkGray).text('Six Pillars of Excellence', 50, 50);
const services = [
  { title: 'Strategy & Governance', desc: 'Data strategy, governance frameworks, COE setup' },
  { title: 'Data Platform Build', desc: 'Azure, Databricks, Fabric implementations' },
  { title: 'Analytics & BI', desc: 'Power BI, semantic models, self-service analytics' },
  { title: 'MLOps & AI', desc: 'Production AI, GenAI integration, ML pipelines' },
  { title: 'Managed Services', desc: '24/7 support, optimization, health monitoring' },
  { title: 'Enterprise Training', desc: 'Bootcamps, certifications, knowledge transfer' },
];
services.forEach((s, i) => {
  const col = i % 3;
  const row = Math.floor(i / 3);
  const x = 50 + col * 290;
  const y = 120 + row * 160;
  doc.roundedRect(x, y, 270, 130, 8).fill(colors.lightGray);
  doc.fontSize(14).fillColor(colors.darkGray).text(s.title, x + 15, y + 25, { width: 240 });
  doc.fontSize(10).fillColor(colors.gray).text(s.desc, x + 15, y + 55, { width: 240 });
});
addFooter(5);

// Slide 6: Industries
addSlide(colors.white);
doc.fontSize(10).fillColor(colors.teal).text('Industries We Serve', 50, 30);
doc.fontSize(26).fillColor(colors.darkGray).text('Deep Expertise Across Sectors', 50, 50);
const industries = ['Energy & Utilities', 'Financial Services', 'Public Sector', 'Healthcare'];
industries.forEach((ind, i) => {
  const x = 60 + i * 220;
  doc.roundedRect(x, 150, 200, 120, 8).fill(colors.lightGray);
  doc.fontSize(14).fillColor(colors.darkGray).text(ind, x, 200, { width: 200, align: 'center' });
});
addFooter(6);

// Slide 7: Our Team
addSlide(colors.white);
doc.fontSize(10).fillColor(colors.teal).text('Our Team', 50, 30);
doc.fontSize(26).fillColor(colors.darkGray).text('World-Class Expertise', 50, 50);
const team = [
  { name: 'Prince Andrew', role: 'CEO & Founder', desc: '12+ years in enterprise data' },
  { name: 'Sarah Chen', role: 'CTO', desc: '15+ years data architecture' },
  { name: 'Dr. Priya Sharma', role: 'VP AI & Innovation', desc: 'PhD ML, 10+ years AI' },
  { name: 'David Thompson', role: 'VP Training', desc: '2,000+ students trained' },
];
team.forEach((t, i) => {
  const x = 60 + i * 220;
  doc.roundedRect(x, 120, 200, 200, 8).stroke(colors.gray);
  doc.fontSize(13).fillColor(colors.darkGray).text(t.name, x, 180, { width: 200, align: 'center' });
  doc.fontSize(10).fillColor(colors.teal).text(t.role, x, 200, { width: 200, align: 'center' });
  doc.fontSize(9).fillColor(colors.gray).text(t.desc, x, 225, { width: 200, align: 'center' });
});
doc.roundedRect(50, 370, 860, 60, 8).fill(colors.lightGray);
doc.fontSize(11).fillColor(colors.darkGray).text('50+ Years Combined Experience  |  40+ Professional Certifications  |  Fortune 500 Project Experience', 50, 392, { width: 860, align: 'center' });
addFooter(7);

// Slide 8: Services Section Divider
addSlide(colors.darkBlue);
doc.fontSize(12).fillColor(colors.cyan).text('Comprehensive Solutions', 50, 200, { width: 860, align: 'center' });
doc.fontSize(44).fillColor(colors.white).text('Our Services', 50, 230, { width: 860, align: 'center' });

// Slides 9-14: Individual Services
const serviceDetails = [
  { title: 'Strategy & Governance', items: ['Data Strategy Development', 'Governance Framework Design', 'Center of Excellence Setup', 'Data Quality Programs'] },
  { title: 'Data Platform Build', items: ['Azure Data Platform', 'Databricks Lakehouse', 'Microsoft Fabric', 'Data Migration'] },
  { title: 'Analytics & BI', items: ['Power BI Implementation', 'Semantic Models', 'Self-Service Analytics', 'Embedded Analytics'] },
  { title: 'MLOps & AI', items: ['GenAI Integration', 'ML Pipeline Development', 'Model Monitoring', 'Azure OpenAI Solutions'] },
  { title: 'Managed Services', items: ['Platform Monitoring', 'Performance Optimization', 'Incident Response', 'Continuous Improvement'] },
  { title: 'Enterprise Training', items: ['Custom Bootcamps', 'Certification Prep', 'Knowledge Transfer', 'Team Upskilling'] },
];
serviceDetails.forEach((svc, idx) => {
  addSlide(colors.white);
  doc.fontSize(10).fillColor(colors.teal).text('Services', 50, 30);
  doc.fontSize(26).fillColor(colors.darkGray).text(svc.title, 50, 50);
  svc.items.forEach((item, j) => {
    doc.fontSize(14).fillColor(colors.darkGray).text('• ' + item, 70, 140 + j * 40);
  });
  addFooter(9 + idx);
});

// Slide 15 (after services): Section divider already counted

// Slide 16: Technology Partners
addSlide(colors.white);
doc.fontSize(10).fillColor(colors.teal).text('Ecosystem & Expertise', 50, 30);
doc.fontSize(26).fillColor(colors.darkGray).text('Technology Partners', 50, 50);
const partners = ['Microsoft Azure', 'Databricks', 'Microsoft Fabric', 'Power BI', 'Snowflake', 'AWS', 'Google Cloud'];
partners.forEach((p, i) => {
  const col = i % 4;
  const row = Math.floor(i / 4);
  const x = 60 + col * 220;
  const y = 120 + row * 130;
  doc.roundedRect(x, y, 200, 100, 8).stroke(colors.gray);
  doc.fontSize(12).fillColor(colors.darkGray).text(p, x, y + 40, { width: 200, align: 'center' });
});
doc.roundedRect(50, 400, 860, 80, 8).fill(colors.blue);
doc.fontSize(13).fillColor(colors.white).text('40+ Azure Certifications  |  Databricks Certified Architects  |  Power BI Specialists', 50, 430, { width: 860, align: 'center' });
addFooter(16);

// Slide 17: Delivery Methodology
addSlide(colors.white);
doc.fontSize(10).fillColor(colors.teal).text('How We Work', 50, 30);
doc.fontSize(26).fillColor(colors.darkGray).text('Our Delivery Methodology', 50, 50);
const phases = [
  { num: '1', title: 'Discovery', duration: '2-4 Weeks' },
  { num: '2', title: 'Implementation', duration: '3-6 Months' },
  { num: '3', title: 'Support', duration: 'Ongoing' },
];
phases.forEach((p, i) => {
  const x = 150 + i * 260;
  doc.circle(x + 50, 200, 30).fill(colors.blue);
  doc.fontSize(20).fillColor(colors.white).text(p.num, x + 38, 188);
  doc.fontSize(16).fillColor(colors.darkGray).text(p.title, x, 260, { width: 100, align: 'center' });
  doc.fontSize(11).fillColor(colors.teal).text(p.duration, x, 285, { width: 100, align: 'center' });
});
addFooter(17);

// Slide 18: Case Studies Divider
addSlide(colors.darkBlue);
doc.fontSize(12).fillColor(colors.cyan).text('Success Stories', 50, 200, { width: 860, align: 'center' });
doc.fontSize(44).fillColor(colors.white).text('Case Studies', 50, 230, { width: 860, align: 'center' });

// Slide 19-20: Case Studies
const caseStudies = [
  { client: 'Major Energy Company', challenge: 'Legacy data warehouse modernization', solution: 'Azure Databricks lakehouse', result: '60% cost reduction, 10x faster queries' },
  { client: 'Financial Services Firm', challenge: 'Real-time fraud detection', solution: 'Azure ML + Databricks streaming', result: '85% fraud detection improvement' },
];
caseStudies.forEach((cs, idx) => {
  addSlide(colors.white);
  doc.fontSize(10).fillColor(colors.teal).text('Case Study', 50, 30);
  doc.fontSize(26).fillColor(colors.darkGray).text(cs.client, 50, 50);
  doc.fontSize(14).fillColor(colors.blue).text('Challenge:', 50, 130);
  doc.fontSize(13).fillColor(colors.darkGray).text(cs.challenge, 50, 150);
  doc.fontSize(14).fillColor(colors.blue).text('Solution:', 50, 200);
  doc.fontSize(13).fillColor(colors.darkGray).text(cs.solution, 50, 220);
  doc.fontSize(14).fillColor(colors.blue).text('Result:', 50, 270);
  doc.fontSize(13).fillColor(colors.teal).text(cs.result, 50, 290);
  addFooter(19 + idx);
});

// Slide 21: Training Section Divider
addSlide(colors.darkBlue);
doc.fontSize(12).fillColor(colors.cyan).text('Ripotek Academy', 50, 180, { width: 860, align: 'center' });
doc.fontSize(44).fillColor(colors.white).text('Professional Training', 50, 210, { width: 860, align: 'center' });
doc.fontSize(18).fillColor('#cbd5e1').text('Launch Your Data Career', 50, 290, { width: 860, align: 'center' });

// Slide 22: Training Programs
addSlide(colors.white);
doc.fontSize(10).fillColor(colors.teal).text('Launch Your Data Career', 50, 30);
doc.fontSize(26).fillColor(colors.darkGray).text('Training Programs', 50, 50);
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
  const col = i % 4;
  const row = Math.floor(i / 4);
  const x = 50 + col * 220;
  const y = 100 + row * 140;
  doc.roundedRect(x, y, 210, 110, 6).stroke(colors.gray);
  doc.fontSize(11).fillColor(colors.darkGray).text(prog.title, x + 10, y + 20, { width: 190 });
  doc.fontSize(9).fillColor(colors.gray).text(prog.duration, x + 10, y + 45);
  doc.fontSize(12).fillColor(colors.darkGray).text(prog.price, x + 10, y + 70);
});
doc.roundedRect(50, 410, 860, 50, 6).fill(colors.blue);
doc.fontSize(11).fillColor(colors.white).text('85% Placement Rate  |  90 Days Avg. Time to Hire  |  2,000+ Students Trained', 50, 428, { width: 860, align: 'center' });
addFooter(22);

// Slide 23: Training-to-Hire Model
addSlide(colors.white);
doc.fontSize(10).fillColor(colors.teal).text('Career Journey', 50, 30);
doc.fontSize(26).fillColor(colors.darkGray).text('Training-to-Hire Model', 50, 50);
doc.fontSize(12).fillColor(colors.gray).text("We don't just teach skills; we build careers. Our integrated model ensures you are job-ready from day one.", 50, 100, { width: 700 });
const steps = ['Live Training', 'Portfolio', 'Mentorship', 'Interview Prep', 'Partner Intros', 'Job Placement'];
steps.forEach((step, i) => {
  const x = 70 + i * 140;
  doc.circle(x + 30, 220, 20).fill(colors.teal);
  doc.fontSize(14).fillColor(colors.white).text((i + 1).toString(), x + 24, 212);
  doc.fontSize(9).fillColor(colors.darkGray).text(step, x, 260, { width: 60, align: 'center' });
});
addFooter(23);

// Slide 24: Why Ripotek
addSlide(colors.white);
doc.fontSize(10).fillColor(colors.teal).text('Why Ripotek', 50, 30);
doc.fontSize(26).fillColor(colors.darkGray).text('Our Competitive Advantage', 50, 50);
const advantages = [
  { title: 'Industry Expertise', desc: '10+ years across Energy, Finance, Healthcare, Public Sector' },
  { title: 'Knowledge Transfer', desc: 'We train your teams to own the solutions we build' },
  { title: 'Proven Results', desc: '$12M+ measurable ROI delivered to clients' },
  { title: 'Modern Stack', desc: 'Azure, Databricks, Fabric, Power BI, cutting-edge AI' },
];
advantages.forEach((adv, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const x = 50 + col * 430;
  const y = 120 + row * 140;
  doc.fontSize(14).fillColor(colors.blue).text(adv.title, x, y);
  doc.fontSize(11).fillColor(colors.gray).text(adv.desc, x, y + 25, { width: 400 });
});
addFooter(24);

// Slide 25: Testimonials
addSlide(colors.lightGray);
doc.fontSize(10).fillColor(colors.teal).text('Client Success', 50, 30);
doc.fontSize(26).fillColor(colors.darkGray).text('What Our Clients Say', 50, 50);
doc.fontSize(14).fillColor(colors.darkGray).text('"Ripotek transformed our data infrastructure in 6 months. The team\'s expertise in Azure and Databricks is unmatched."', 100, 180, { width: 760 });
doc.fontSize(11).fillColor(colors.gray).text('— VP of Analytics, Major Energy Corp', 100, 240);
addFooter(25);

// Slide 26: Engagement Models
addSlide(colors.white);
doc.fontSize(10).fillColor(colors.teal).text('Flexible Partnerships', 50, 30);
doc.fontSize(26).fillColor(colors.darkGray).text('Engagement Models', 50, 50);
const models = [
  { title: 'Project-Based', desc: 'Fixed scope, timeline, and budget for defined deliverables' },
  { title: 'Staff Augmentation', desc: 'Skilled consultants embedded in your team' },
  { title: 'Managed Services', desc: 'Ongoing support and optimization' },
  { title: 'Training Programs', desc: 'Upskill your workforce with our academy' },
];
models.forEach((model, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const x = 50 + col * 430;
  const y = 120 + row * 150;
  doc.roundedRect(x, y, 400, 120, 8).fill(colors.lightGray);
  doc.fontSize(14).fillColor(colors.blue).text(model.title, x + 20, y + 25);
  doc.fontSize(11).fillColor(colors.gray).text(model.desc, x + 20, y + 50, { width: 360 });
});
addFooter(26);

// Slide 27: CTA
addSlide(colors.darkBlue);
doc.fontSize(12).fillColor(colors.cyan).text("Let's Get Started", 50, 180, { width: 860, align: 'center' });
doc.fontSize(36).fillColor(colors.white).text('Ready to Transform\nYour Data Strategy?', 50, 210, { width: 860, align: 'center' });
doc.fontSize(14).fillColor('#cbd5e1').text('Book a free discovery call to discuss your data challenges and goals.', 100, 330, { width: 760, align: 'center' });

// Slide 28: Contact Us
addSlide(colors.white);
doc.fontSize(10).fillColor(colors.teal).text('Get In Touch', 50, 30);
doc.fontSize(26).fillColor(colors.darkGray).text('Contact Us', 50, 50);
doc.fontSize(14).fillColor(colors.darkGray).text('Headquarters', 70, 130);
doc.fontSize(11).fillColor(colors.gray).text('Calgary, Alberta, Canada', 70, 150);
doc.fontSize(14).fillColor(colors.darkGray).text('Phone', 70, 200);
doc.fontSize(11).fillColor(colors.gray).text('+1 587-259-0033', 70, 220);
doc.fontSize(14).fillColor(colors.darkGray).text('Website', 70, 270);
doc.fontSize(11).fillColor(colors.teal).text('www.ripotek.com', 70, 290);
// Email section
doc.roundedRect(500, 100, 400, 280, 10).fill(colors.blue);
doc.fontSize(11).fillColor(colors.white).text('info@ripotek.com', 530, 140);
doc.fontSize(11).fillColor(colors.white).text('consulting@ripotek.com', 530, 180);
doc.fontSize(11).fillColor(colors.white).text('training@ripotek.com', 530, 220);
doc.fontSize(11).fillColor(colors.white).text('careers@ripotek.com', 530, 260);
doc.fontSize(22).fillColor(colors.blue).text('Design. Engineer. Deliver.', 50, 450, { width: 860, align: 'center' });
addFooter(28);

// Slide 29: Appendix
addSlide(colors.white);
doc.fontSize(10).fillColor(colors.teal).text('Appendix', 50, 30);
doc.fontSize(26).fillColor(colors.darkGray).text('Certifications & Tech Stack', 50, 50);
// Certifications
doc.fontSize(13).fillColor(colors.blue).text('Team Certifications', 50, 110);
const certs = [
  'Azure Solutions Architect Expert (5)',
  'Azure Data Engineer Associate (8)',
  'Databricks Data Engineer Pro (4)',
  'Power BI Data Analyst Associate (6)',
  'AWS Solutions Architect (2)',
];
certs.forEach((cert, i) => {
  doc.fontSize(10).fillColor(colors.darkGray).text('• ' + cert, 70, 140 + i * 25);
});
// Tech stack
doc.fontSize(13).fillColor(colors.blue).text('Technology Stack', 500, 110);
const techStack = [
  'Cloud: Microsoft Azure, AWS, GCP',
  'Data: Databricks, Synapse, Fabric, Snowflake',
  'ETL: Azure Data Factory, Workflows, dbt',
  'BI: Power BI, Tableau, Analysis Services',
  'AI/ML: Azure OpenAI, Azure ML, LangChain',
];
techStack.forEach((tech, i) => {
  doc.fontSize(10).fillColor(colors.darkGray).text('• ' + tech, 520, 140 + i * 25);
});
addFooter(29);

// Finalize the PDF
doc.end();

console.log(`PDF file created: ${outputPath}`);
