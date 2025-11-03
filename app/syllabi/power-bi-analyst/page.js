'use client';

import React from 'react';
import { Printer, ArrowLeft, BarChart3, Clock, DollarSign, Calendar, Users, Award, CheckCircle, BookOpen, Target, Briefcase, Mail, Phone, Globe } from 'lucide-react';

export default function PowerBIAnalystSyllabus() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Print-hidden navigation buttons */}
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-3">
        <a
          href="/training"
          className="bg-white shadow-lg rounded-lg px-4 py-2 flex items-center gap-2 text-gray-700 hover:bg-gray-50 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Training
        </a>
        <button
          onClick={handlePrint}
          className="bg-teal-600 text-white shadow-lg rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-teal-700 transition"
        >
          <Printer className="w-4 h-4" />
          Print to PDF
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto p-8 print:p-12">
        {/* Header */}
        <header className="mb-12 border-b-4 border-teal-600 pb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-blue-900 rounded-lg flex items-center justify-center print:shadow-none shadow-lg">
                  <span className="text-white font-bold text-2xl">R</span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Ripotek Technologies Inc.</h1>
                  <p className="text-gray-600 italic">Design. Engineer. Deliver.</p>
                </div>
              </div>
            </div>
            <div className="text-right text-sm text-gray-600">
              <p>Calgary, Alberta</p>
              <p>www.ripotek.com</p>
              <p>training@ripotek.com</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-teal-600 text-white p-6 rounded-lg print:rounded-none">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Power BI Analyst</h2>
            </div>
            <p className="text-xl text-blue-100">Professional Training Program Syllabus</p>
          </div>
        </header>

        {/* Program Overview */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-teal-600" />
            Program Overview
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-l-4 border-teal-600 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-teal-600" />
                <span className="font-semibold text-gray-900">Duration</span>
              </div>
              <p className="text-gray-700">12 Weeks (3 sessions per week)</p>
              <p className="text-sm text-gray-600">36 total sessions, 108 instructional hours</p>
            </div>

            <div className="border-l-4 border-teal-600 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-teal-600" />
                <span className="font-semibold text-gray-900">Investment</span>
              </div>
              <p className="text-gray-700">CAD $1,599</p>
              <p className="text-sm text-gray-600">Flexible payment plans available</p>
            </div>

            <div className="border-l-4 border-teal-600 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-teal-600" />
                <span className="font-semibold text-gray-900">Schedule</span>
              </div>
              <p className="text-gray-700">Monday/Wednesday/Saturday</p>
              <p className="text-sm text-gray-600">6:00 PM - 9:00 PM Mountain Time</p>
            </div>

            <div className="border-l-4 border-teal-600 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-teal-600" />
                <span className="font-semibold text-gray-900">Certification Prep</span>
              </div>
              <p className="text-gray-700">Microsoft PL-300</p>
              <p className="text-sm text-gray-600">Power BI Data Analyst Associate</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 print:border-2">
            <h4 className="font-bold text-gray-900 mb-3">Program Description</h4>
            <p className="text-gray-700 mb-4">
              The Power BI Analyst program is a comprehensive 12-week training designed to transform you into a skilled business intelligence professional. This hands-on program covers everything from data modeling fundamentals to advanced DAX calculations and enterprise reporting strategies.
            </p>
            <p className="text-gray-700">
              You'll work with real-world datasets, build professional-grade dashboards, and prepare for the Microsoft PL-300 certification exam. By program completion, you'll have a portfolio of projects demonstrating your ability to turn raw data into actionable business insights.
            </p>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-teal-600" />
            Prerequisites
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Required</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basic Excel proficiency (formulas, pivot tables)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Understanding of basic business concepts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Computer with Windows 10/11 (8GB RAM minimum)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Stable internet connection</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Recommended</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Experience with data analysis or reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Familiarity with SQL (helpful but not required)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Business domain knowledge</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-teal-600" />
            Learning Outcomes
          </h3>

          <div className="bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-200 rounded-lg p-6">
            <p className="text-gray-700 mb-4 font-semibold">Upon successful completion of this program, you will be able to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Connect to and transform data from multiple sources</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Design and implement star schema data models</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Write advanced DAX measures and calculated columns</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Create interactive and visually compelling reports</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Implement row-level security and data governance</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Deploy and manage content in Power BI Service</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Optimize report performance and query efficiency</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Build paginated reports for operational reporting</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Integrate AI capabilities using Quick Insights and Q&A</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Pass the Microsoft PL-300 certification exam</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Page Break for Print */}
        <div className="print:break-before-page"></div>

        {/* Weekly Curriculum */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-teal-600" />
            Detailed Weekly Curriculum
          </h3>

          {/* Week 1 */}
          <div className="mb-8 border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-4">
              <h4 className="text-xl font-bold">Week 1: Introduction to Power BI and Data Fundamentals</h4>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 1: Power BI Ecosystem Overview</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Power BI Desktop, Service, and Mobile overview</li>
                  <li>Understanding the analytics workflow</li>
                  <li>Navigating the Power BI interface</li>
                  <li>Creating your first simple report</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 2: Connecting to Data Sources</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>File-based sources (Excel, CSV, JSON)</li>
                  <li>Database connections (SQL Server, Azure SQL)</li>
                  <li>Web data and APIs</li>
                  <li>Import vs DirectQuery vs Live Connection</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 3: Power Query Basics</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Introduction to Power Query Editor</li>
                  <li>Basic transformations (filtering, sorting, removing duplicates)</li>
                  <li>Data type management</li>
                  <li>Understanding query folding</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
                <p className="font-semibold text-gray-900 mb-1">Lab Project:</p>
                <p className="text-gray-700">Connect to sample sales data and create basic visualizations</p>
              </div>
            </div>
          </div>

          {/* Week 2 */}
          <div className="mb-8 border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-4">
              <h4 className="text-xl font-bold">Week 2: Advanced Data Transformation with Power Query</h4>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 1: Advanced Transformations</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Splitting and merging columns</li>
                  <li>Pivoting and unpivoting data</li>
                  <li>Conditional columns and custom columns</li>
                  <li>Working with dates and text</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 2: Combining Queries</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Append queries (union)</li>
                  <li>Merge queries (joins)</li>
                  <li>Inner, outer, left, and right joins</li>
                  <li>Handling merge conflicts</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 3: M Language and Parameters</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Introduction to M language</li>
                  <li>Reading and modifying M code</li>
                  <li>Creating parameters</li>
                  <li>Dynamic data sources</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
                <p className="font-semibold text-gray-900 mb-1">Lab Project:</p>
                <p className="text-gray-700">Clean and transform messy HR data with multiple sources</p>
              </div>
            </div>
          </div>

          {/* Week 3 */}
          <div className="mb-8 border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-4">
              <h4 className="text-xl font-bold">Week 3: Data Modeling Fundamentals</h4>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 1: Star Schema Design</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Dimensional modeling concepts</li>
                  <li>Fact vs dimension tables</li>
                  <li>Creating relationships</li>
                  <li>Cardinality and cross-filter direction</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 2: Relationships and Keys</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Primary and foreign keys</li>
                  <li>Active vs inactive relationships</li>
                  <li>Many-to-many relationships</li>
                  <li>Bidirectional filtering best practices</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 3: Model Optimization</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Reducing data model size</li>
                  <li>Removing unnecessary columns</li>
                  <li>Data type optimization</li>
                  <li>Model documentation best practices</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
                <p className="font-semibold text-gray-900 mb-1">Lab Project:</p>
                <p className="text-gray-700">Build a star schema for retail sales analysis</p>
              </div>
            </div>
          </div>

          {/* Week 4 */}
          <div className="mb-8 border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-4">
              <h4 className="text-xl font-bold">Week 4: Introduction to DAX</h4>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 1: DAX Basics</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>DAX syntax and structure</li>
                  <li>Calculated columns vs measures</li>
                  <li>Basic aggregation functions (SUM, AVERAGE, COUNT)</li>
                  <li>CALCULATE function introduction</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 2: Filter Context</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Understanding row and filter context</li>
                  <li>Context transition</li>
                  <li>FILTER function</li>
                  <li>ALL and ALLEXCEPT functions</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 3: Time Intelligence</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Creating date tables</li>
                  <li>DATESYTD, TOTALYTD functions</li>
                  <li>Previous period comparisons</li>
                  <li>Year-over-year growth calculations</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
                <p className="font-semibold text-gray-900 mb-1">Lab Project:</p>
                <p className="text-gray-700">Create KPI measures with time intelligence</p>
              </div>
            </div>
          </div>

          {/* Week 5 */}
          <div className="mb-8 border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-4">
              <h4 className="text-xl font-bold">Week 5: Advanced DAX</h4>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 1: Iterator Functions</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>SUMX, AVERAGEX, COUNTX</li>
                  <li>Row-by-row calculations</li>
                  <li>Performance considerations</li>
                  <li>When to use iterators</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 2: Table Functions</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>SUMMARIZE and SUMMARIZECOLUMNS</li>
                  <li>ADDCOLUMNS and SELECTCOLUMNS</li>
                  <li>CROSSJOIN and UNION</li>
                  <li>Virtual tables in DAX</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 3: Advanced Filtering</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>KEEPFILTERS and REMOVEFILTERS</li>
                  <li>USERELATIONSHIP for inactive relationships</li>
                  <li>TREATAS for virtual relationships</li>
                  <li>Complex filter expressions</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
                <p className="font-semibold text-gray-900 mb-1">Lab Project:</p>
                <p className="text-gray-700">Build customer segmentation analysis with advanced DAX</p>
              </div>
            </div>
          </div>

          {/* Week 6 */}
          <div className="mb-8 border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-4">
              <h4 className="text-xl font-bold">Week 6: Visualization Fundamentals</h4>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 1: Core Visualizations</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Bar, column, and line charts</li>
                  <li>Pie and donut charts</li>
                  <li>Tables and matrices</li>
                  <li>Cards and KPI visuals</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 2: Advanced Visualizations</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Scatter plots and bubble charts</li>
                  <li>Waterfall and funnel charts</li>
                  <li>Maps and filled maps</li>
                  <li>Decomposition tree and key influencers</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 3: Custom Visuals</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>AppSource custom visuals</li>
                  <li>Certified vs non-certified visuals</li>
                  <li>Popular custom visual libraries</li>
                  <li>Visual formatting and styling</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
                <p className="font-semibold text-gray-900 mb-1">Lab Project:</p>
                <p className="text-gray-700">Create executive dashboard with multiple visualization types</p>
              </div>
            </div>
          </div>

          <div className="print:break-before-page"></div>

          {/* Week 7 */}
          <div className="mb-8 border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-4">
              <h4 className="text-xl font-bold">Week 7: Report Design and Interactivity</h4>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 1: Report Design Principles</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Visual hierarchy and layout</li>
                  <li>Color theory for dashboards</li>
                  <li>Typography and spacing</li>
                  <li>Mobile-responsive design</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 2: Slicers and Filters</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Slicer types and configurations</li>
                  <li>Report, page, and visual level filters</li>
                  <li>Cross-filtering and cross-highlighting</li>
                  <li>Sync slicers across pages</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 3: Bookmarks and Navigation</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Creating and managing bookmarks</li>
                  <li>Button actions and navigation</li>
                  <li>Drill-through pages</li>
                  <li>Tooltips customization</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
                <p className="font-semibold text-gray-900 mb-1">Lab Project:</p>
                <p className="text-gray-700">Build interactive sales report with advanced navigation</p>
              </div>
            </div>
          </div>

          {/* Week 8 */}
          <div className="mb-8 border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-4">
              <h4 className="text-xl font-bold">Week 8: Power BI Service and Collaboration</h4>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 1: Publishing and Sharing</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Publishing reports to Power BI Service</li>
                  <li>Workspaces and workspace roles</li>
                  <li>Apps and app audiences</li>
                  <li>Sharing dashboards and reports</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 2: Datasets and Dataflows</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Shared datasets</li>
                  <li>Dataset discovery and lineage</li>
                  <li>Creating dataflows</li>
                  <li>Incremental refresh configuration</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 3: Dashboards and Alerts</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Dashboard creation and tiles</li>
                  <li>Dashboard themes</li>
                  <li>Data alerts and subscriptions</li>
                  <li>Mobile app configuration</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
                <p className="font-semibold text-gray-900 mb-1">Lab Project:</p>
                <p className="text-gray-700">Deploy multi-report app to Power BI Service workspace</p>
              </div>
            </div>
          </div>

          {/* Week 9 */}
          <div className="mb-8 border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-4">
              <h4 className="text-xl font-bold">Week 9: Security and Governance</h4>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 1: Row-Level Security</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>RLS concepts and implementation</li>
                  <li>Static vs dynamic RLS</li>
                  <li>Testing RLS with roles</li>
                  <li>Managing RLS in Power BI Service</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 2: Data Sensitivity and Governance</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Sensitivity labels</li>
                  <li>Data protection policies</li>
                  <li>Endorsement and certification</li>
                  <li>Usage metrics and monitoring</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 3: Administration</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Tenant settings overview</li>
                  <li>Capacity management</li>
                  <li>Gateway configuration</li>
                  <li>Audit logs and activity tracking</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
                <p className="font-semibold text-gray-900 mb-1">Lab Project:</p>
                <p className="text-gray-700">Implement multi-level RLS for sales territories</p>
              </div>
            </div>
          </div>

          {/* Week 10 */}
          <div className="mb-8 border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-4">
              <h4 className="text-xl font-bold">Week 10: Performance Optimization</h4>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 1: Query Performance</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Using Performance Analyzer</li>
                  <li>DAX Studio basics</li>
                  <li>Query plans and bottlenecks</li>
                  <li>Optimizing slow measures</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 2: Data Model Optimization</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Reducing model size</li>
                  <li>Aggregations and user hierarchies</li>
                  <li>Disabling auto date/time tables</li>
                  <li>Composite models and aggregations</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 3: Best Practices</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Report design for performance</li>
                  <li>Visual optimization techniques</li>
                  <li>Managing large datasets</li>
                  <li>Scheduled refresh strategies</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
                <p className="font-semibold text-gray-900 mb-1">Lab Project:</p>
                <p className="text-gray-700">Optimize slow-performing enterprise report</p>
              </div>
            </div>
          </div>

          {/* Week 11 */}
          <div className="mb-8 border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-4">
              <h4 className="text-xl font-bold">Week 11: Advanced Topics and Integration</h4>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 1: Paginated Reports</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Introduction to Power BI Report Builder</li>
                  <li>Creating pixel-perfect reports</li>
                  <li>Parameters and expressions</li>
                  <li>Exporting and subscriptions</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 2: AI Features</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Q&A natural language queries</li>
                  <li>Quick Insights</li>
                  <li>Smart narratives</li>
                  <li>Anomaly detection</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 3: Integration and APIs</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Power BI REST API basics</li>
                  <li>Embedding reports in applications</li>
                  <li>Excel integration with Power BI</li>
                  <li>Teams and SharePoint integration</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
                <p className="font-semibold text-gray-900 mb-1">Lab Project:</p>
                <p className="text-gray-700">Create paginated invoice report and configure AI insights</p>
              </div>
            </div>
          </div>

          {/* Week 12 */}
          <div className="mb-8 border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-4">
              <h4 className="text-xl font-bold">Week 12: Capstone Project and Certification Prep</h4>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 1: Capstone Project Kickoff</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Project requirements review</li>
                  <li>Dataset selection and planning</li>
                  <li>Architecture design</li>
                  <li>Individual project work time</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 2: PL-300 Exam Preparation</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Exam format and structure</li>
                  <li>Key topics review</li>
                  <li>Practice questions</li>
                  <li>Test-taking strategies</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Session 3: Capstone Presentations</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Student project presentations</li>
                  <li>Peer feedback and review</li>
                  <li>Portfolio development tips</li>
                  <li>Career guidance and next steps</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
                <p className="font-semibold text-gray-900 mb-1">Capstone Project:</p>
                <p className="text-gray-700">End-to-end Power BI solution from data modeling to deployment</p>
              </div>
            </div>
          </div>
        </section>

        <div className="print:break-before-page"></div>

        {/* Assessment and Grading */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-teal-600" />
            Assessment and Grading
          </h3>

          <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
                  <th className="p-4 text-left font-semibold">Assessment Component</th>
                  <th className="p-4 text-left font-semibold">Weight</th>
                  <th className="p-4 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Weekly Labs</td>
                  <td className="p-4 text-gray-700">30%</td>
                  <td className="p-4 text-gray-700">11 hands-on lab assignments</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">Midterm Project</td>
                  <td className="p-4 text-gray-700">20%</td>
                  <td className="p-4 text-gray-700">Week 6 - Complete dashboard build</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Participation</td>
                  <td className="p-4 text-gray-700">10%</td>
                  <td className="p-4 text-gray-700">Class engagement and discussions</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">Capstone Project</td>
                  <td className="p-4 text-gray-700">40%</td>
                  <td className="p-4 text-gray-700">Week 12 - Comprehensive final project</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-teal-50 border-2 border-teal-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Grading Scale</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="font-bold text-teal-700 text-xl">A</div>
                <div className="text-gray-600 text-sm">90-100%</div>
              </div>
              <div>
                <div className="font-bold text-teal-700 text-xl">B</div>
                <div className="text-gray-600 text-sm">80-89%</div>
              </div>
              <div>
                <div className="font-bold text-teal-700 text-xl">C</div>
                <div className="text-gray-600 text-sm">70-79%</div>
              </div>
              <div>
                <div className="font-bold text-teal-700 text-xl">F</div>
                <div className="text-gray-600 text-sm">Below 70%</div>
              </div>
            </div>
            <p className="text-gray-700 mt-4 text-sm">
              A minimum grade of 70% is required to receive a certificate of completion
            </p>
          </div>
        </section>

        {/* Materials and Resources */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-teal-600" />
            Materials and Resources
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">Required Software</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Power BI Desktop</div>
                    <div className="text-sm text-gray-600">Free download from Microsoft</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Power BI Service</div>
                    <div className="text-sm text-gray-600">Free or Pro license (provided)</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Microsoft Excel</div>
                    <div className="text-sm text-gray-600">Office 365 or 2019+</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">DAX Studio</div>
                    <div className="text-sm text-gray-600">Free community tool</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">Provided Resources</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Course Materials</div>
                    <div className="text-sm text-gray-600">Slides, code samples, datasets</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Lab Environments</div>
                    <div className="text-sm text-gray-600">Azure sandbox subscriptions</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Exam Voucher</div>
                    <div className="text-sm text-gray-600">Microsoft PL-300 certification</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Practice Tests</div>
                    <div className="text-sm text-gray-600">MeasureUp practice exams</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Services */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-teal-600" />
            Career Services and Job Placement
          </h3>

          <div className="bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-teal-200 rounded-lg p-6">
            <p className="text-gray-700 mb-6">
              Ripotek's Training-to-Hire program connects graduates with opportunities at partner companies across Energy, Financial Services, Healthcare, and Public Sectors.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Career Support Includes:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">One-on-one career coaching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Resume and LinkedIn optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Interview preparation workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Portfolio development guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Networking events with employers</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">Typical Job Titles:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Power BI Developer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Business Intelligence Analyst</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Data Analyst</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Reporting Analyst</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Analytics Consultant</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t-2 border-teal-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-teal-700">85%</div>
                  <div className="text-sm text-gray-600">Placement Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-700">90 days</div>
                  <div className="text-sm text-gray-600">Average Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-700">$65K+</div>
                  <div className="text-sm text-gray-600">Avg Starting Salary</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>

          <div className="space-y-4">
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">Is financial aid available?</h4>
              <p className="text-gray-700">
                Yes, we offer flexible payment plans with 0% interest. Split your tuition into 3 or 6 monthly installments. We also partner with financing providers for longer-term options.
              </p>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">What if I miss a session?</h4>
              <p className="text-gray-700">
                All sessions are recorded and available within 24 hours. You'll also have access to instructor office hours and a dedicated Slack community for questions and support.
              </p>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">Do I need prior programming experience?</h4>
              <p className="text-gray-700">
                No programming experience is required. DAX is a formula language similar to Excel. We start with fundamentals and build up to advanced concepts. Excel proficiency is helpful.
              </p>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">Is the PL-300 exam included?</h4>
              <p className="text-gray-700">
                Yes! Your tuition includes one Microsoft PL-300 certification exam voucher (valued at $165 USD). You also receive practice tests and exam prep sessions.
              </p>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">Can I attend from anywhere?</h4>
              <p className="text-gray-700">
                Yes! Our live online format allows you to join from anywhere with a stable internet connection. In-person options are available at our Calgary office for local students.
              </p>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">What is your refund policy?</h4>
              <p className="text-gray-700">
                Full refund if you withdraw within the first 2 weeks. After that, tuition is non-refundable, but you retain access to all materials and recordings.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-4 border-teal-600 pt-8 mt-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5 text-teal-600" />
                Contact Us
              </h4>
              <p className="text-gray-700 text-sm mb-2">training@ripotek.com</p>
              <p className="text-gray-700 text-sm mb-2">enroll@ripotek.com</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Phone className="w-5 h-5 text-teal-600" />
                Phone
              </h4>
              <p className="text-gray-700 text-sm mb-2">+1 306 999-3552</p>
              <p className="text-gray-700 text-sm">Mon-Fri: 9am-5pm MT</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-teal-600" />
                Online
              </h4>
              <p className="text-gray-700 text-sm mb-2">www.ripotek.com/training</p>
              <p className="text-gray-700 text-sm">LinkedIn: /company/ripotek</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-gray-600 text-sm mb-2">
              Ripotek Technologies Inc. | Calgary, Alberta, Canada
            </p>
            <p className="text-gray-500 text-xs">
              © 2023-2025 Ripotek Technologies Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

    </div>
  );
}
