import ReportForm from '../components/forms/ReportForm.jsx';
import './Report.css';

export default function Report() {
  return (
    <div className="report-page">
      <div className="report-header">
        <h1>Anonymous Report</h1>
        <p className="subtitle">Help keep ZATech safe and respectful for everyone.</p>
      </div>
      <div className="report-form-card">
        <ReportForm />
      </div>
    </div>
  );
}