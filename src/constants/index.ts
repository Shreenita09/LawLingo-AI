export const LANGUAGES = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  hi: 'हिंदी',
  ar: 'العربية'
};

export const COUNTRIES = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'India', 
  'Germany', 'France', 'Spain', 'Mexico', 'Brazil', 'South Africa'
];

export const LEGAL_CATEGORIES = {
  'workplace': 'Workplace Rights',
  'tenant': 'Tenant Laws',
  'womens-rights': "Women's Rights",
  'marriage': 'Marriage & Family',
  'consumer': 'Consumer Protection',
  'criminal': 'Criminal Law'
};

export const EXAMPLE_QUERIES = [
  "What is an eviction notice?",
  "Explain this paragraph from my lease",
  "Which laws protect domestic violence victims?",
  "What are my rights during police questioning?",
  "How do I file a workplace harassment complaint?"
];

export const EMERGENCY_NUMBERS = {
  'United States': [
    { name: 'National Domestic Violence Hotline', number: '1-800-799-7233', available: '24/7' },
    { name: 'Emergency Services', number: '911', available: '24/7' },
    { name: 'Crisis Text Line', number: 'Text HOME to 741741', available: '24/7' },
    { name: 'National Sexual Assault Hotline', number: '1-800-656-4673', available: '24/7' }
  ],
  'United Kingdom': [
    { name: 'National Domestic Abuse Helpline', number: '0808 2000 247', available: '24/7' },
    { name: 'Emergency Services', number: '999', available: '24/7' },
    { name: 'Samaritans', number: '116 123', available: '24/7' },
    { name: 'Refuge Helpline', number: '0808 2000 247', available: '24/7' }
  ],
  'India': [
    { name: 'Women Helpline', number: '1091', available: '24/7' },
    { name: 'Emergency Services', number: '112', available: '24/7' },
    { name: 'National Commission for Women', number: '011-26942369', available: 'Business Hours' },
    { name: 'Childline India', number: '1098', available: '24/7' }
  ],
  'Canada': [
    { name: 'Assaulted Women\'s Helpline', number: '1-866-863-0511', available: '24/7' },
    { name: 'Emergency Services', number: '911', available: '24/7' },
    { name: 'Crisis Services Canada', number: '1-833-456-4566', available: '24/7' },
    { name: 'Kids Help Phone', number: '1-800-668-6868', available: '24/7' }
  ],
  'Australia': [
    { name: '1800RESPECT', number: '1800 737 732', available: '24/7' },
    { name: 'Emergency Services', number: '000', available: '24/7' },
    { name: 'Lifeline', number: '13 11 14', available: '24/7' },
    { name: 'Men\'s Referral Service', number: '1300 766 491', available: '24/7' }
  ]
};

export const LEGAL_STEPS_BY_COUNTRY = {
  'United States': {
    'physical': [
      'Seek immediate medical attention and document all injuries',
      'Contact local police to file a report (call 911 if in immediate danger)',
      'Take photographs of injuries, damaged property, and the scene',
      'Apply for a restraining order or protection order at your local courthouse',
      'Contact the National Domestic Violence Hotline: 1-800-799-7233',
      'Gather important documents (ID, insurance, bank records, medications)',
      'Consider temporary housing options through local domestic violence shelters',
      'Consult with a domestic violence attorney or legal aid organization'
    ],
    'emotional': [
      'Document all incidents with dates, times, and detailed descriptions',
      'Save threatening messages, emails, or voicemails as evidence',
      'Contact the National Domestic Violence Hotline for counseling resources',
      'Consider applying for a restraining order if threats escalate',
      'Seek support from a licensed therapist or counselor',
      'Connect with local domestic violence support groups',
      'Create a safety plan with trusted friends or family members'
    ],
    'financial': [
      'Document all financial abuse (hidden accounts, stolen money, controlled access)',
      'Gather financial records, bank statements, and credit reports',
      'Open a separate bank account in your name only if safe to do so',
      'Contact your bank to report unauthorized transactions',
      'Seek legal advice about property rights and financial obligations',
      'Consider credit monitoring services to protect your financial identity',
      'Contact local legal aid for assistance with financial recovery'
    ]
  },
  'United Kingdom': [
    'Contact police on 999 if in immediate danger, or 101 for non-emergency',
    'Apply for a non-molestation order or occupation order through family court',
    'Document all evidence including photos, messages, emails, and witness statements',
    'Contact the National Domestic Abuse Helpline: 0808 2000 247',
    'Seek medical attention and request that injuries be documented',
    'Contact your local council about emergency housing options',
    'Consider contacting a solicitor specializing in family law',
    'Explore support services through local domestic abuse organizations'
  ],
  'India': [
    'File an FIR under Section 498A IPC for domestic violence at the nearest police station',
    'Apply for protection order under the Domestic Violence Act 2005',
    'Document all evidence including medical reports, photographs, and witness statements',
    'Contact the National Commission for Women or local women\'s commission',
    'Seek medical treatment and preserve all medical records',
    'Consider approaching the local magistrate for immediate relief',
    'Contact legal aid services through district legal services authority',
    'Explore shelter homes and support services through NGOs and government programs'
  ],
  'Canada': [
    'Contact emergency services (911) if in immediate danger',
    'Apply for a restraining order or peace bond through provincial court',
    'Document all incidents with photos, medical records, and witness statements',
    'Contact local police to file a report and request a safety plan',
    'Reach out to provincial domestic violence services for support',
    'Seek medical attention and ensure injuries are properly documented',
    'Contact legal aid services for assistance with legal proceedings',
    'Explore emergency housing options through local shelters and support services'
  ],
  'Australia': [
    'Call 000 for emergency services if in immediate danger',
    'Apply for an Apprehended Violence Order (AVO) or similar protection order',
    'Document all evidence including photos, messages, and medical reports',
    'Contact 1800RESPECT for counseling and support services',
    'Seek medical attention and request documentation of injuries',
    'Contact local police to file a report and discuss safety planning',
    'Explore legal aid services for assistance with court proceedings',
    'Consider emergency accommodation through domestic violence services'
  ]
};

export const DISGUISE_REDIRECT_URL = 'https://www.allrecipes.com/recipes/';

export const SAFETY_TIPS = [
  'Trust your instincts - if something feels wrong, it probably is',
  'Create a safety plan with trusted friends or family members',
  'Keep important documents in a safe, accessible place',
  'Have a bag packed with essentials in case you need to leave quickly',
  'Memorize important phone numbers in case your phone is taken',
  'Use the disguise feature if you need to quickly hide this website',
  'Consider using a computer at a library or friend\'s house for privacy'
];