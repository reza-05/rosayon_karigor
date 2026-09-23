export interface NavItem {
  label: string;
  banglaLabel: string;
  href: string;
}

export interface ProblemCard {
  id: string;
  icon: 'brain' | 'flask' | 'clock';
  quote: string;
  quoteBangla: string;
  insight: string;
  insightBangla: string;
}

export interface MethodStep {
  step: string;
  title: string;
  titleBangla: string;
  description: string;
  descriptionBangla: string;
  icon: 'book' | 'eye' | 'link' | 'edit' | 'award';
  tag: string;
}

export interface StatItem {
  value: string;
  label: string;
  labelBangla: string;
  sublabel: string;
}

export interface TimelineItem {
  period: string;
  role: string;
  institution: string;
  location: string;
  description: string;
  type: 'teaching' | 'education' | 'research';
}

export interface ChemistryResource {
  id: string;
  title: string;
  titleBangla: string;
  category: 'ssc' | 'hsc' | 'admission' | 'organic' | 'physical' | 'inorganic';
  type: 'concept_note' | 'reaction_map' | 'problem_set' | 'formula_sheet' | 'video_list';
  pagesOrDuration: string;
  downloadCount: string;
  description: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  nameBangla: string;
  batch: string;
  institution: string;
  quote: string;
  quoteBangla: string;
  improvementTag: string;
  avatarUrl?: string;
  initials?: string;
  avatarBg?: string;
  rating?: number;
  category?: 'hsc' | 'ssc' | 'foundation';
}

export interface FAQItem {
  id: string;
  question: string;
  questionBangla: string;
  answer: string;
  answerBangla: string;
  category: 'general' | 'batches' | 'pedagogy' | 'admission';
}

export interface EnrollmentFormData {
  fullName: string;
  role: 'student' | 'guardian';
  academicLevel: string;
  phone: string;
  learningFormat: string;
  challengeNote: string;
}
