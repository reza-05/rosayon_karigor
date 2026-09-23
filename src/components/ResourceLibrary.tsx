import { useState } from 'react';
import { FileText, Map, CheckSquare, Video, Download, Eye, Sparkles, X, CheckCircle, ArrowRight } from 'lucide-react';
import { resourcesData } from '../data/resourcesData';
import type { ChemistryResource } from '../types';

export const ResourceLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [previewItem, setPreviewItem] = useState<ChemistryResource | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Resources', bangla: 'সব রিসোর্স' },
    { id: 'ssc', label: 'SSC', bangla: '৯ম-১০ম' },
    { id: 'hsc', label: 'HSC', bangla: '১১শ-১২শ' },
    { id: 'admission', label: 'Admission', bangla: 'ভর্তি পরীক্ষা' },
    { id: 'organic', label: 'Organic', bangla: 'জৈব রসায়ন' },
    { id: 'physical', label: 'Physical', bangla: 'ভৌত রসায়ন' },
    { id: 'inorganic', label: 'Inorganic', bangla: 'অজৈব রসায়ন' },
  ];

  const filteredResources =
    selectedCategory === 'all'
      ? resourcesData
      : resourcesData.filter((res) => res.category === selectedCategory);

  const getTypeIcon = (type: ChemistryResource['type']) => {
    switch (type) {
      case 'concept_note':
        return <FileText className="w-5 h-5 text-blue-600" />;
      case 'reaction_map':
        return <Map className="w-5 h-5 text-amber-600" />;
      case 'problem_set':
        return <CheckSquare className="w-5 h-5 text-emerald-600" />;
      case 'formula_sheet':
        return <Sparkles className="w-5 h-5 text-indigo-600" />;
      case 'video_list':
        return <Video className="w-5 h-5 text-purple-600" />;
    }
  };

  const handleDownload = (res: ChemistryResource) => {
    setDownloadSuccess(res.id);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 3000);
  };

  return (
    <section id="resources" className="pt-8 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-orange/15 text-brand-orange text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>FREE DIGITAL LIBRARY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-navy tracking-tight">
            A free library for curious minds.
          </h1>

          <p className="text-base sm:text-lg text-brand-muted font-bangla max-w-2xl mx-auto leading-relaxed">
            রিসোর্স লাইব্রেরি: রঙিন কনসেপ্ট নোট, বিক্রিয়া রূপান্তর ম্যাপ, সূত্র সংকলন ও প্রশ্ন ব্যাংক—সম্পূর্ণ বিনামূল্যে সংগ্রহ করে তোমার প্রস্তুতিকে এগিয়ে রাখো।
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'bg-white text-brand-navy/70 border border-brand-navy/10 hover:bg-brand-navy/5 hover:text-brand-navy'
              }`}
            >
              <span>{cat.label}</span>
              <span className="opacity-70 text-[10px] ml-1">({cat.bangla})</span>
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="group bg-white rounded-3xl p-6 border border-brand-navy/8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Badges & Type Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-cream flex items-center justify-center border border-brand-navy/5">
                    {getTypeIcon(res.type)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {res.isNew && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                        New
                      </span>
                    )}
                    {res.isPopular && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider">
                        Popular
                      </span>
                    )}
                    <span className="text-[11px] font-mono text-brand-muted">
                      {res.pagesOrDuration}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-brand-navy font-serif leading-snug mb-1 group-hover:text-brand-ocean transition-colors">
                  {res.title}
                </h3>
                <h4 className="text-xs font-bangla text-brand-orange font-semibold mb-3">
                  {res.titleBangla}
                </h4>

                {/* Description */}
                <p className="text-xs text-brand-muted leading-relaxed font-sans mb-6">
                  {res.description}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-brand-navy/5 flex items-center justify-between">
                <span className="text-[11px] text-brand-muted font-mono">
                  {res.downloadCount}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPreviewItem(res)}
                    className="p-2 rounded-xl text-brand-ocean hover:bg-brand-ocean/10 transition-colors"
                    title="Quick Preview"
                    aria-label="Preview resource"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDownload(res)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      downloadSuccess === res.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-brand-navy text-white hover:bg-brand-ocean'
                    }`}
                  >
                    {downloadSuccess === res.id ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Saved!</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>Get PDF</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-brand-navy/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-orange/15 text-brand-orange flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-brand-navy font-serif">
                Looking for exclusive batch study packs?
              </div>
              <div className="text-xs font-bangla text-brand-muted">
                এনরোল করা শিক্ষার্থীদের জন্য রয়েছে ৩৫০+ পৃষ্ঠার সম্পূর্ণ সলভড মাস্টার ওয়ার্কবুক।
              </div>
            </div>
          </div>
          <a
            href="#enroll"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-orange text-white text-xs font-semibold hover:bg-brand-orange-hover transition-colors flex-shrink-0"
          >
            <span>Join Upcoming Batch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Preview Modal */}
      {previewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-brand-navy/10 shadow-2xl relative space-y-6">
            <button
              type="button"
              onClick={() => setPreviewItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-brand-muted hover:bg-brand-navy/5"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-ocean/10 text-brand-ocean flex items-center justify-center">
                {getTypeIcon(previewItem.type)}
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-orange font-bold">
                  {previewItem.pagesOrDuration}
                </span>
                <h3 className="text-lg font-serif font-bold text-brand-navy">
                  {previewItem.title}
                </h3>
              </div>
            </div>

            <div className="bg-[#FAF8F5] rounded-2xl p-4 border border-brand-navy/5 space-y-2">
              <div className="text-xs font-bangla font-semibold text-brand-navy">
                {previewItem.titleBangla}
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                {previewItem.description}
              </p>
            </div>

            <div className="border-t border-brand-navy/10 pt-4 flex items-center justify-between">
              <span className="text-xs text-brand-muted">Free Digital Resource • PDF</span>
              <button
                type="button"
                onClick={() => {
                  handleDownload(previewItem);
                  setPreviewItem(null);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-orange text-white text-xs font-semibold shadow hover:bg-brand-orange-hover"
              >
                <Download className="w-4 h-4" />
                <span>Download This Resource</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
