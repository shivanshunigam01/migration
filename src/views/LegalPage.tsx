import React from "react"
import { Link } from "react-router-dom"
import { NAVY, TEXT, GOLD } from "@/theme"
import SiteHeader from "@/components/layout/SiteHeader"
import SiteFooter from "@/components/layout/SiteFooter"
import { PageHero } from "@/components/page/PageHero"
import { ComplianceDisclaimer } from "@/components/page/ComplianceDisclaimer"
import { PolicyArticle, type PolicySection } from "@/components/page/PolicyArticle"
import StructuredData from "@/components/page/StructuredData"
import { ACCESSIBILITY_POLICY, TERMS_OF_USE } from "@/data/legalPolicies"
import { NAV_ITEMS } from "@/data/navItems"
import { usePageSeo } from "@/lib/usePageSeo"

type LegalKind = "privacy" | "terms" | "accessibility" | "ai-policy"

type LegalCopy = {
  title: string
  eyebrow: string
  description: string
  meta?: string[]
  sections: PolicySection[]
}

const PRACTICE_META = [
  "1313 Success Group Pty Ltd trading as Nanak Migration Group",
  "ABN 54 674 937 476 · ACN 674 937 476",
  "Registered Migration Agent — Navpreet Aulakh · MARN 2619467",
  "Policy date 15 September 2026 · Version 2.0",
]

const COPY: Record<LegalKind, LegalCopy> = {
  privacy: {
    title: "Privacy Policy",
    eyebrow: "Legal",
    description:
      "How Nanak Migration Group collects, holds, uses and discloses personal information, and how you can access, correct or complain about it.",
    meta: PRACTICE_META,
    sections: [
      {
        h: "About this policy",
        p: "This policy explains how we collect, hold, use and disclose personal information when you make an enquiry, use our website or engage our migration practice. It also explains how you can access or correct your information, make a complaint and choose whether your information is processed using AI. It covers clients, prospective and former clients, applicants, sponsors and other individuals whose information we handle.",
      },
      {
        h: "1. Our privacy and confidentiality obligations",
        p: [
          "In this policy, “we”, “us” and “our” mean 1313 Success Group Pty Ltd trading as Nanak Migration Group. We apply the privacy standards described in this policy, informed by the Australian Privacy Principles (APPs), and comply with the Privacy Act 1988 (Cth) and other privacy requirements to the extent they apply to our business.",
          "Our registered migration agents also owe the confidentiality duty in section 35 of the Migration (Migration Agents Code of Conduct) Regulations 2021 as amended (Code). They must not disclose or allow disclosure of client personal information to a third person without written client consent, except where a Commonwealth, State or Territory law requires disclosure. This duty continues after the engagement ends. A permission under privacy law does not, by itself, displace that duty.",
          "Read this policy with our Artificial Intelligence Policy and your service agreement. This policy gives information about our practices; reading it, using our website or making an enquiry does not itself give consent to every collection, disclosure, marketing activity or AI use described below.",
        ],
      },
      {
        h: "2. Information we collect and hold",
        p: "We limit collection to information reasonably necessary for the relevant enquiry, service or lawful business function. Depending on the matter, we may collect and hold the following:",
        bullets: [
          "Identity and contact information, including names, date and place of birth, nationality, citizenship, passport and visa details, addresses and contact preferences.",
          "Immigration information, including travel and visa history, applications, refusals, cancellations, conditions and correspondence with authorities.",
          "Family and relationship information, including partners, children, dependants and evidence relevant to a family or partner application.",
          "Education, language, employment and sponsorship information, including qualifications, skills assessments, test results, references, payslips and employer records.",
          "Financial and service information, including evidence of funds, bank statements, relevant tax records, invoices, payment confirmations, instructions, communications and complaints.",
          "Technical and interaction information, including website activity, device and browser details, IP addresses, enquiry and booking data, and records of your communications with us.",
        ],
      },
      {
        h: "2.1 Sensitive information",
        p: [
          "A matter may require health information, criminal records, racial or ethnic origin, religious beliefs, political opinions or associations, sexual orientation or practices, or biometric information of the kind protected by privacy law. We collect sensitive information only where reasonably necessary and with valid consent, unless a lawful exception applies. We explain what is required and why; a general engagement or privacy-policy acknowledgement is not treated as blanket consent.",
          "We handle relationship evidence, gender identity information, family violence or protection claims and children’s information with particular care, whether or not each item falls within the statutory definition of sensitive information. We do not request every category listed above from every client.",
          "Our records may include professional opinions, file notes and AI-assisted drafts or summaries prepared under our AI Policy. Information about an identifiable person is protected even if it is an inference or is later found to be incorrect.",
        ],
      },
      {
        h: "3. Collection methods and your choices",
        p: [
          "We usually collect information directly from you through consultations, questionnaires, our website, email, telephone, secure document channels and the material you supply. Where direct collection is unreasonable or impracticable, and collection is lawful and necessary, we may obtain information from authorised representatives, employers, sponsors, referees, previous advisers, government agencies, review bodies, assessing authorities, education providers, health providers, translators or public records.",
          "At or before collection, or as soon as practicable afterwards, we take reasonable steps to explain the purpose, relevant recipients and overseas handling, whether collection is required by law and the main consequences of not supplying the information. Identity checks and client records may be necessary under sections 36 and 56 of the Code. We identify any additional collection requirement relevant to your matter.",
          "You may make a general enquiry anonymously or using a pseudonym where practicable. We will explain when identity or other information is necessary to advise, verify instructions or lodge an application. If essential information is withheld, we may be unable to provide all requested services; we will discuss the effect with you.",
          "If we receive information we did not request, we assess whether we could lawfully have collected it. If not, we destroy or de-identify it as soon as practicable where lawful and reasonable, subject to any legal record-keeping requirement. We restrict use and access while that assessment occurs.",
          "We tell you before recording a consultation and obtain the permission required for the recording. AI transcription or recording also requires the separate written consent described in our AI Policy. Ordinary written file notes remain available.",
        ],
      },
      {
        h: "4. Other people and related services",
        p: [
          "If you give us another person’s information, tell them about this policy and ensure you have lawful authority to provide it. We may seek confirmation directly. We remain responsible for our own collection, notices and consent requirements and do not rely solely on your assurance where further checks are needed.",
          "A partner, sponsor, employer, family member or person paying our fees is not automatically entitled to another client’s confidential information. We identify the clients we act for and agree appropriate sharing arrangements. Family members may request separate files. For children and people who may lack capacity, we assess capacity and verify the authority of any parent, guardian or other representative before relying on their instructions or consent.",
          "Engaging this migration practice does not automatically authorise information sharing with Nanak Accountants & Associates or another related or referral business. Where such sharing is proposed, we explain its purpose and obtain the required written authority, unless disclosure is required by law. Contact us privately if particular sharing or communication arrangements could put you at risk.",
        ],
      },
      {
        h: "5. Purposes and disclosures",
        p: [
          "We use information to respond to enquiries, assess instructions and options, prepare and manage applications, arrange relevant assessments and translations, communicate with you and authorities, administer fees and records, maintain service quality and security, and respond to complaints or legal obligations. Any new or unrelated use must have an appropriate legal basis and satisfy our confidentiality duties.",
          "Subject to those duties and the necessary written consent, we may disclose information to the following recipients for the relevant purpose. We disclose only what is reasonably necessary. The list does not authorise unrestricted access to your file.",
        ],
        table: {
          head: ["Recipient", "Purpose"],
          rows: [
            [
              "Home Affairs and other government agencies",
              "Lodgement, processing, verification and correspondence relevant to your matter.",
            ],
            [
              "Review bodies and legal practitioners",
              "Review proceedings, legal referrals and court-related work where relevant, authorised and lawfully within scope.",
            ],
            [
              "Assessing authorities, employers, sponsors and education providers",
              "Assessments, evidence checks and application requirements within agreed information-sharing arrangements.",
            ],
            [
              "Health providers, translators, interpreters and verification services",
              "Necessary examinations, translations, interpretation and document checks.",
            ],
            [
              "Our authorised support personnel and service providers",
              "File administration, communications, hosting, storage, payments and approved AI processing.",
            ],
            [
              "Professional advisers and insurers",
              "Advice, accounts, insurance, complaints and claims, subject to confidentiality requirements.",
            ],
            [
              "OMARA, OAIC and other lawful recipients",
              "Regulatory oversight, investigations, legal requirements and properly authorised requests.",
            ],
          ],
        },
      },
      {
        h: "5.1 No sale of personal information",
        p: "We do not sell your personal information or provide it to other businesses for their independent marketing. If business ownership or file responsibility changes, any proposed transfer must comply with applicable law, the Code and the required notice and consent arrangements.",
      },
      {
        h: "6. Overseas access and disclosure",
        p: [
          "Personal information may be accessed, stored or processed outside Australia. The likely countries under the arrangements described for our practice are India, where our Jammu support team works, and the United States, where technology and AI services may process data. A matter may also require dealings with authorities or service providers in your country of citizenship, residence, employment or study. The relevant country depends on your circumstances.",
          "Our Jammu support personnel may undertake authorised document preparation and administration under the supervision of our registered migration agent. Their access is limited to assigned work and is subject to confidentiality and security requirements. Professional immigration assistance remains with the registered migration agent; overseas support arrangements do not transfer that responsibility.",
          "Before engaging an overseas recipient, we assess the information involved, the recipient and any subcontractors, security, purposes of access and retention. We take reasonable steps to require appropriate protection, including contractual and operational safeguards. Where APP 8 applies, overseas disclosure can leave us accountable under Australian law for a recipient’s mishandling of the information.",
          "We identify other likely recipient countries in collection notices and update this policy when our general arrangements change, where practicable. You may ask for current details relevant to your matter. We do not use agreement to this policy, an engagement or AI consent as consent to disapply APP 8.1. Any legally available exception must be assessed separately and must not override the Code.",
          "If you require Australian-only handling, tell us before providing documents or engaging us. We will explain whether that arrangement is feasible. Refusing AI use alone does not prevent ordinary overseas support or cloud handling authorised for your matter.",
        ],
      },
      {
        h: "7. Artificial intelligence",
        p: [
          "Approved AI may assist with drafting, summarising, extracting or organising authorised material and research support. Before AI is used to give immigration assistance, we explain its role. Before personal information is entered into an AI system, we obtain specific written consent identifying the proposed provider, purpose, information and relevant overseas handling.",
          "We do not treat consent to our general services as consent to AI. You may decline or withdraw AI consent without an increase to your agreed fee solely for that choice. Approved provider terms and settings must prohibit model training and unrelated reuse of client information. Unapproved, free or personal AI accounts must not be used for client work.",
          "A registered migration agent reviews and approves substantive AI-assisted work before it is provided as advice or lodged. Our AI Policy explains the safeguards, consent process, withdrawal arrangements and limits on deletion of completed records. An AI feature integrated into our practice software is subject to the same requirements as a separate tool.",
        ],
      },
      {
        h: "8. Automated processing and decisions",
        p: [
          "We do not allow a computer program or AI system to make the final professional assessment, recommendation or lodgement decision on your matter without the registered migration agent’s judgement and approval. Visa and review outcomes are determined by the relevant authority, whose systems are governed by its own policies.",
          "Software and approved AI can support administration and preparation, including organising information used by the agent. Human review does not by itself mean that automated-decision transparency requirements are irrelevant. Before introducing or materially changing a system that uses personal information to make, or substantially support, a decision with significant effects on an individual, we assess the relevant obligations and provide the required disclosures.",
          "We will review our systems and this policy before the APP automated-decision transparency provisions commence on 10 December 2026. Where applicable, the policy will describe the kinds of information used and the decisions made or substantially supported by computer programs.",
        ],
      },
      {
        h: "9. Website and marketing information",
        p: [
          "Our website and service providers may use cookies, server logs and analytics to operate the site, remember preferences, understand visitor use and maintain security. Technical information, including IP addresses and cookie identifiers, may be personal information when linked to an identifiable person. Enquiry and booking forms collect the information you enter.",
          "You can manage cookies through your browser and any site controls provided. Restricting cookies may affect functionality. If we use advertising pixels, remarketing, additional analytics or an AI chat service, we must provide appropriate notices and obtain consent where required. Sensitive enquiry content and client documents must not be sent to advertising tools. Third-party links and platforms have their own privacy practices.",
          "We may send relevant service news or marketing where permitted and with the consent required for the communication. Marketing includes a simple opt-out; you can also contact us to opt out without charge. We do not use sensitive information for marketing without express consent. Your choice does not stop necessary messages about your existing matter. Electronic marketing must comply with applicable spam requirements.",
        ],
      },
      {
        h: "10. Security and government identifiers",
        p: [
          "We take reasonable technical and organisational steps to protect personal information against misuse, interference, loss and unauthorised access, modification or disclosure. Our required controls include individual accounts, access restricted to work needs, multi-factor authentication where available, appropriate encryption, controlled document sharing, staff confidentiality obligations, security updates, backups and secure disposal. Providers and overseas support arrangements are subject to security review.",
          "No system is immune from compromise. Please use the document channels we nominate, avoid sending unnecessary sensitive information by ordinary email or social media, and tell us promptly about suspected account compromise or an incorrect recipient. We will discuss a safer communication method where needed.",
          "We do not adopt passport numbers or other government identifiers as our own client identifiers. We use or disclose them only for lawful, necessary purposes, such as identity verification and an authorised application. A migration engagement does not give us a general right to collect your tax file number. Please redact TFNs from tax records before providing them unless a lawful collection basis has been specifically explained. Unnecessarily received TFNs are restricted and removed where legally permitted.",
        ],
      },
      {
        h: "11. Retention and disposal",
        p: [
          "Under section 56 of the Code, the registered migration agent must take all reasonable steps to keep a client file for seven years after the last action on the file for that client. The period is not measured simply from a visa decision or the end of an engagement. A later action may change the relevant date.",
          "We retain records longer where another legal requirement, an active proceeding or a properly assessed continuing need requires it. Enquiries that do not become engagements and other records are kept only for as long as reasonably necessary. Provider logs and temporary AI material should be minimised and managed separately from the required client file.",
          "When retention is no longer required and the information is no longer needed for a permitted purpose, we take reasonable steps to destroy it securely or permanently de-identify it. Backup copies may remain until their normal secure deletion cycle, with access restricted. A deletion request or withdrawal of consent does not override legal retention obligations.",
        ],
      },
      {
        h: "12. Access, correction and return of documents",
        p: [
          "You may contact us to request access to the personal information we hold about you or ask us to correct information that is inaccurate, outdated, incomplete, irrelevant or misleading. We may reasonably verify identity and authority. We respond within a reasonable period, ordinarily within 30 days, and explain any delay.",
          "There is no charge to make a request or to correct information. If a charge for providing access is lawful and appropriate, it will be reasonable and explained in advance. Access may be limited where the law permits, including to protect another person’s privacy. If we refuse access or correction, we provide written reasons unless the law prevents this and explain the available complaint process.",
          "If correction is refused, you may ask us to associate a statement of your position with the record. Where we correct information previously disclosed to another recipient, you may ask us to notify that recipient; we take reasonable steps to do so unless impracticable or unlawful.",
          "The separate document-return duty in section 54 of the Code is not extended by our general privacy-request timeframe. On a qualifying written request, documents to which a client is entitled must be returned within 14 days. We may retain copies needed for our legal records. Outstanding fees do not entitle this practice to withhold those documents.",
        ],
      },
      {
        h: "13. Data breaches",
        p: [
          "If we suspect unauthorised access, disclosure or loss of personal information, we act promptly to contain the incident, assess the information and people affected, preserve relevant evidence and reduce harm. Where the Notifiable Data Breaches scheme applies, we assess suspected eligible breaches within the applicable statutory timeframe and notify the OAIC and affected individuals as required.",
          "Notification depends on the legal criteria, including whether serious harm is likely and whether effective remedial action prevents that harm. When notification is required, we explain the nature of the incident, the information involved and recommended protective steps as soon as practicable. We also consider applicable confidentiality and professional obligations.",
        ],
      },
      {
        h: "14. Enquiries and complaints",
        p: [
          "Privacy and AI enquiries: Navpreet Aulakh, Registered Migration Agent (MARN 2619467), Nanak Migration Group, 21 Ravenwoods Way, Craigieburn VIC 3064. Email visa@nanakmigration.com.au · Phone 1300 644 728.",
          "Please describe the concern, relevant dates and the outcome you seek. We acknowledge complaints promptly, investigate fairly and aim to provide a written response within 30 days. If additional time is needed, we explain why and give an expected response date. We can discuss assistance if you have difficulty putting your concern in writing.",
          "If you are dissatisfied with our response, or we have not responded within a reasonable period, you may contact the Office of the Australian Information Commissioner (OAIC), where the matter falls within its jurisdiction, on 1300 363 992 or through its privacy complaints service. The OAIC generally expects you to raise the complaint with us first and allow a reasonable opportunity to respond.",
          "Concerns about a registered migration agent’s professional conduct or confidentiality may be raised directly with OMARA. You do not need our permission or to complete our internal process before contacting OMARA. Making a complaint does not waive your rights.",
        ],
      },
      {
        h: "15. Availability and changes",
        p: [
          "This policy is available free of charge on our website and on request. Contact us if you need it in another accessible form. We review it at least annually and when our services, systems or legal requirements change. We publish the revised version with its policy date and notify existing clients of material changes affecting their information.",
          "A revised policy does not retrospectively authorise a new use or disclosure. We obtain further consent where required. Nothing in this policy excludes a legal duty, restricts a non-excludable right or limits the confidentiality obligations of our registered migration agents.",
        ],
      },
      {
        h: "16. Legal framework and guidance",
        p: "Sources reviewed on 15 September 2026. The Code applies to registered migration agents; Privacy Act and APP obligations depend on their statutory application. The standards and procedures stated in this policy also govern our practice.",
        bullets: [
          "Migration Agents Code of Conduct — sections 35, 36 and 53 to 56.",
          "OAIC Australian Privacy Principles guidelines.",
          "OAIC guidance on collection of personal information.",
          "OAIC guidance on overseas disclosure.",
          "OMARA guidance on the use of artificial intelligence.",
          "OAIC guidance on tax file number information.",
          "OAIC guidance on access, correction and security.",
          "OAIC guidance on reporting data breaches.",
          "OAIC automated decision making consultation — commencement information; consultation material is not final guidance.",
        ],
      },
    ],
  },
  "ai-policy": {
    title: "Artificial Intelligence Policy",
    eyebrow: "Legal",
    description:
      "How Nanak Migration Group may use artificial intelligence on a migration matter, the safeguards that apply and the choices available to you.",
    meta: PRACTICE_META,
    sections: [
      {
        h: "About this policy",
        p: "This policy explains how we may use artificial intelligence (AI) when assisting with a migration matter, the safeguards that apply and the choices available to you. It applies to our registered migration agents, employees, contractors and support personnel in Australia and overseas. Read it with our Privacy Policy and your service agreement.",
      },
      {
        h: "1. Professional responsibility",
        p: [
          "The immigration assistance we provide remains the responsibility of the registered migration agent handling your matter. AI is a support tool and does not hold registration, exercise our professional judgement or determine your visa outcome. Approval or refusal of an application rests with the relevant government authority or review body.",
          "Our use of AI must comply with the Migration Act 1958 (Cth), the Migration (Migration Agents Code of Conduct) Regulations 2021 as amended (Code), and applicable privacy law. OMARA requires advance explanation of AI use and written client consent before personal details are entered into an AI platform. AI does not create an exception to restrictions on who may lawfully provide immigration assistance.",
        ],
      },
      {
        h: "2. Permitted assistance",
        p: "Subject to the controls in this policy, approved AI features in practice management software and approved business AI assistants may help us to:",
        bullets: [
          "Prepare initial drafts of correspondence, checklists, file notes and submissions for review.",
          "Summarise or extract information from authorised documents and organise file material.",
          "Locate publicly available legislation, policy or research leads, which the agent independently verifies.",
          "Improve spelling, grammar and presentation without changing the facts, meaning or your instructions.",
        ],
      },
      {
        h: "2.1 Scope of permitted use",
        p: "AI is not used in every matter or for every task. Any use involving your personal information must fall within the specific purpose and systems described in your written consent. A feature embedded in software is subject to the same controls as a separate AI application.",
      },
      {
        h: "3. Prohibited uses",
        p: "We do not permit AI to:",
        bullets: [
          "Give you personalised immigration assistance that a registered migration agent has not reviewed and approved, or autonomously select a visa pathway, assess credibility, character or health, or decide whether to lodge a matter.",
          "Invent facts, evidence, employment histories, relationship accounts, references, signatures, certifications or legal authorities; conceal material information; or alter evidence to create a misleading impression.",
          "Submit an application, send substantive advice, make a declaration, accept instructions or commit you to a transaction without the required human approval and authority.",
          "Train or fine-tune a general AI model using client information, create reusable client datasets, or use that information for advertising or unrelated profiling.",
          "Process client work through free, trial, consumer or personally controlled accounts, unapproved browser extensions, public sharing links or unapproved AI meeting assistants.",
        ],
      },
      {
        h: "3.1 Translation and supervision",
        p: "AI translation is not represented as a certified translation or used in place of a qualified interpreter where one is required. Staff must not use an AI system to bypass professional supervision or access restrictions.",
      },
      {
        h: "4. Approval of tools and providers",
        p: [
          "The responsible registered migration agent must approve the provider, product, account type and intended use before client information is processed. A paid subscription, business label or built-in feature is not sufficient by itself. We require an assessment of confidentiality, data locations, provider and subcontractor access, retention, deletion, security and the ability to honour a refusal or withdrawal of consent.",
          "Approval for personal information requires suitable contractual protections and settings that prohibit model training or unrelated reuse of our client data. Any provider access for support, security or abuse monitoring must be assessed and disclosed where relevant. If the required protections cannot be established, the tool must not receive client personal information.",
          "Approved tools and permitted uses must be recorded in a practice register and reviewed when features, terms or processing arrangements materially change. AI access to a file must remain disabled until the necessary consent and controls are in place. The provider and feature proposed for your matter will be identified before you are asked to consent.",
        ],
      },
      {
        h: "5. Protection of information",
        p: [
          "We use only the information necessary for an approved task. Wherever practicable, staff must remove names, contact details, identifiers, document metadata and distinctive facts that could identify a person. Replacing a name with initials or a file number does not make information anonymous if the person remains reasonably identifiable.",
          "Passports, financial records and complete client files must not be uploaded merely for convenience. Health and character material, family violence or protection claims, information about children and other highly sensitive material require an additional assessment of necessity and risk by the responsible agent. If use is approved, the exact information must be covered by specific written consent and processed in the minimum necessary amount.",
          "Passwords, access codes, authentication credentials and tax file numbers must not be entered into AI tools. We also protect confidential business information belonging to sponsors and employers. Client consent does not authorise us to disregard another person’s privacy, a confidentiality restriction or a legal prohibition.",
        ],
      },
      {
        h: "6. Advance explanation and written consent",
        p: [
          "Before using AI to give immigration assistance, we explain the proposed role of AI. Before entering your personal information into an AI platform, we obtain an affirmative written choice. The notice identifies the provider and product, the task, the information involved, likely overseas processing, relevant retention arrangements, material risks and the human review that will occur.",
          "Consent may be recorded in a separately accepted clause in the service agreement, an electronic consent record, an email expressly agreeing to the stated use, or the consent form attached to this policy. Merely visiting our website, receiving this policy, making an enquiry, supplying documents or signing a general engagement clause is not treated as AI consent. Options must not be preselected.",
          "Consent must be voluntary, informed and specific. We provide an explanation or interpreter assistance where needed. Each adult whose information is involved must provide the necessary consent, or we must verify that a person has lawful authority to act for them. For children or people who lack capacity, we assess capacity and verify the appropriate representative’s authority.",
          "We seek fresh consent before a material change to the agreed purpose, information, provider or overseas arrangements. Consent to ordinary cloud storage, support work or government lodgement does not, by itself, authorise AI processing.",
        ],
      },
      {
        h: "7. Refusing or withdrawing consent",
        p: [
          "You may decline AI processing of your personal information or withdraw consent by emailing visa@nanakmigration.com.au. We will not refuse service or increase your agreed fee solely because of that choice. Your matter will continue through our registered migration agent using a workflow that does not enter your personal information into AI tools. We will discuss any practical scheduling implications promptly.",
          "On receiving withdrawal, we stop new AI inputs and further AI processing of your personal information within our control, disable relevant features and instruct relevant providers as appropriate. We confirm the arrangements with you. Withdrawal does not invalidate processing already lawfully completed. We take reasonable steps to delete provider-held material no longer needed, subject to legal retention duties and disclosed technical limits; immediate removal from all backups cannot be guaranteed.",
          "Withdrawal does not require destruction of the client file or affect records we must retain. General research using public material without identifying information may continue. A request to restrict all overseas handling is a separate request and is addressed under our Privacy Policy.",
        ],
      },
      {
        h: "8. Overseas processing and support",
        p: [
          "Our support team in Jammu, India may assist with file administration under the supervision of our registered migration agent. AI and other technology providers may process information in the United States and other locations identified for the relevant service. Overseas remote access can involve handling outside Australia even where the main file is stored in Australia.",
          "Before an AI use involving overseas processing is authorised, we explain the likely countries and relevant safeguards. Confidentiality obligations, access limits and supervision apply to our overseas support personnel. We do not treat AI consent or acceptance of this policy as a waiver of Australian Privacy Principle 8.1 or of our confidentiality obligations. Further details are in section 6 of our Privacy Policy.",
        ],
      },
      {
        h: "9. Accuracy and human review",
        p: [
          "AI can omit important facts, produce biased or outdated material, mistranslate a statement or generate convincing but false information. The agent must independently check substantive work against the original evidence and current authoritative sources, including relevant legislation, instruments, departmental requirements and any cited decisions. Particular attention must be given to dates, visa conditions, eligibility requirements, calculations and filing deadlines.",
          "A registered migration agent must review and approve substantive advice, submissions and application material before it is issued or lodged. Administrative outputs are checked by an appropriately trained person under supervision. Review must involve the substance of the work, not merely its spelling or presentation. Where a draft records your experiences or makes a declaration, we also obtain your confirmation of its accuracy and the required authority before use.",
          "You may ask how AI was used on your matter, raise a concern about an output, request a correction or ask for an explanation from your registered migration agent. AI does not reduce our responsibility for the assistance we provide.",
        ],
      },
      {
        h: "10. Chatbots and recording",
        p: [
          "If we introduce an AI chatbot or automated voice service, it must identify itself as AI before interaction. It must be limited to general information and administration, provide a way to contact a person, and obtain the required consent before receiving personal information. Personalised immigration assistance must pass through the agent’s review process.",
          "We do not activate AI recording or transcription of a consultation without first explaining the purpose, provider, handling and retention of the recording and obtaining the necessary express permission from participants. Written AI consent is also required for personal information processed by that service. A participant may choose a consultation with ordinary written file notes instead. Applicable recording and surveillance laws must be observed.",
        ],
      },
      {
        h: "11. Records and incident response",
        p: [
          "For material AI use on a client matter, the file must record the tool, date, purpose, consent, categories of information used, material output and the agent’s verification and approval. Relevant prompts or extracts are retained where necessary to understand the work, without creating unnecessary duplicate stores of sensitive information. Client-file retention follows section 11 of our Privacy Policy.",
          "Personnel must complete appropriate training, use only authorised systems and immediately report an incorrect output, unauthorised upload, consent failure or suspected data exposure. The responsible agent must contain the issue, preserve necessary evidence, investigate, correct affected work and consider timely notification to the client, provider, insurer or regulator as legally required. A material error must not be concealed.",
        ],
      },
      {
        h: "12. Questions and complaints",
        p: [
          "Privacy and AI enquiries: Navpreet Aulakh, Registered Migration Agent (MARN 2619467), Nanak Migration Group, 21 Ravenwoods Way, Craigieburn VIC 3064. Email visa@nanakmigration.com.au · Phone 1300 644 728.",
          "We acknowledge complaints promptly, investigate them and aim to provide a written response within 30 days. If more time is needed, we explain why and give an expected response date. You may complain to OMARA about an agent’s conduct without our permission. Privacy complaints may also be taken to the OAIC where it has jurisdiction, generally after giving us a reasonable opportunity to respond.",
        ],
      },
      {
        h: "13. Review and effect of this policy",
        p: [
          "The responsible registered migration agent oversees this policy. We review it at least annually and earlier when our AI use, providers, legal obligations or regulatory guidance change. Material changes affecting current clients will be notified, and new consent obtained where needed. A policy update does not retrospectively authorise processing.",
          "This policy does not replace the service agreement or the OMARA Consumer Guide. Nothing in it excludes a legal duty, limits a non-excludable right or releases us from responsibility for our professional services.",
        ],
      },
      {
        h: "14. Legal framework and guidance",
        p: "The following sources inform this policy. Legislative duties and regulatory guidance are distinct; the additional operational safeguards above are practice standards. Sources reviewed on 15 September 2026.",
        bullets: [
          "OMARA guidance on the use of artificial intelligence.",
          "Migration Agents Code of Conduct — including professional conduct, confidentiality, supervision and record keeping.",
          "OAIC guidance on commercially available AI products.",
          "OAIC guidance on consent.",
          "OAIC guidance on overseas disclosure.",
        ],
      },
    ],
  },
  terms: TERMS_OF_USE,
  accessibility: ACCESSIBILITY_POLICY,
}

export default function LegalPage({
  kind,
  navigate,
}: {
  kind: LegalKind
  navigate: (page: string) => void
}) {
  const c = COPY[kind]
  usePageSeo(kind, {
    title: `${c.title} | Nanak Migration Group`,
    metaDescription: c.description,
    primaryKeyword: c.title.toLowerCase(),
  })

  const slug = kind === "ai-policy" ? "ai-policy" : kind
  const pageTitle = COPY[kind].title

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: "#fff", color: TEXT }}>
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "https://www.nanakmigration.com.au/" },
          { name: pageTitle, url: `https://www.nanakmigration.com.au/${slug}` },
        ]}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <PageHero
        navigate={navigate}
        variant="support"
        eyebrow={c.eyebrow}
        title={c.title}
        deck={c.description}
        primaryCta={{ label: "Contact us", page: "contact" }}
      />
      <PolicyArticle doc={{ ...c, meta: c.meta ?? PRACTICE_META }} />

      <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px 72px" }}>
        {kind === "privacy" && (
          <p style={{ marginTop: 32, fontSize: 15, color: "#64748b", lineHeight: 1.7 }}>
            Read this policy together with our{" "}
            <Link to="/ai-policy" style={{ color: GOLD, fontWeight: 700 }}>
              Artificial Intelligence Policy
            </Link>{" "}
            and{" "}
            <Link to="/terms" style={{ color: GOLD, fontWeight: 700 }}>
              Website Terms of Use
            </Link>
            .
          </p>
        )}
        {kind === "ai-policy" && (
          <p style={{ marginTop: 32, fontSize: 15, color: "#64748b", lineHeight: 1.7 }}>
            Read this policy together with our{" "}
            <Link to="/privacy" style={{ color: GOLD, fontWeight: 700 }}>
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link to="/terms" style={{ color: GOLD, fontWeight: 700 }}>
              Website Terms of Use
            </Link>
            .
          </p>
        )}

        <p style={{ marginTop: 20, fontSize: 14, color: "#64748b" }}>
          Questions? <Link to="/contact" style={{ color: GOLD, fontWeight: 700 }}>Contact the practice</Link>.
        </p>
      </div>
      <ComplianceDisclaimer />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
