export interface User {
  id: string;
  name: string;
  email: string;
  country: string;
  language: string;
}

export interface Document {
  id: string;
  name: string;
  type: 'pdf' | 'docx' | 'image';
  originalText: string;
  simplifiedText: string;
  uploadDate: Date;
  size: number;
}

export interface LegalQuery {
  id: string;
  query: string;
  country: string;
  category: string;
  response: string;
  sources: string[];
  timestamp: Date;
}

export interface ChatMessage {
  id: string;
  message: string;
  isUser: boolean;
  timestamp: Date;
  type: 'text' | 'voice';
}

export interface Evidence {
  id: string;
  name: string;
  type: 'image' | 'audio' | 'video' | 'pdf' | 'document';
  file: File;
  uploadDate: Date;
  size: number;
  isHidden: boolean;
  description?: string;
  isSecure?: boolean;
}

export interface AbuseReport {
  id: string;
  description: string;
  evidence: Evidence[];
  generatedComplaint?: string;
  timestamp: Date;
  country: string;
  isComplete: boolean;
  abuseType?: 'physical' | 'emotional' | 'financial' | 'sexual' | 'psychological';
}

export interface EmergencyContact {
  id: string;
  name: string;
  phone: string;
  relationship: string;
}

export interface SafetySettings {
  disguiseMode: boolean;
  quickExitEnabled: boolean;
  autoDeleteData: boolean;
  emergencyContactsEnabled: boolean;
}

export type Theme = 'light' | 'dark';
export type Language = 'en' | 'es' | 'fr' | 'hi' | 'ar';
export type LegalCategory = 'workplace' | 'tenant' | 'womens-rights' | 'marriage' | 'consumer' | 'criminal';

export interface AppState {
  user: User | null;
  documents: Document[];
  savedQueries: LegalQuery[];
  chatHistory: ChatMessage[];
  theme: Theme;
  language: Language;
  isAuthenticated: boolean;
  abuseReport?: AbuseReport;
  emergencyContacts: EmergencyContact[];
  safetySettings: SafetySettings;
  sessionData: {
    lastActivity: Date;
    autoSaveEnabled: boolean;
  };
}