import type { PolicyDoc } from "@/components/page/PolicyArticle"

const ENTITY_META = [
  "1313 Success Group Pty Ltd trading as Nanak Migration Group",
  "ABN 54 674 937 476 · ACN 674 937 476",
  "Registered Migration Agent — Navpreet Aulakh · MARN 2619467",
  "Effective date 15 September 2026 · Version 1.0",
]

export const GOVERNANCE_POLICY: PolicyDoc = {
  title: "Governance",
  eyebrow: "Practice",
  description: "How our practice is structured, supervised and held to account.",
  meta: ENTITY_META,
  sections: [
    {
      h: "1. Why we publish this",
      p: [
        "Migration advice is an industry where people hand over their savings, their documents and their future to someone they have often met once. We think you are entitled to know how our practice is run, who is responsible for your matter, and what happens if something goes wrong.",
        "This page sets that out. It is written for clients, not for regulators, though it reflects obligations we owe to both.",
      ],
    },
    {
      h: "2. Who we are",
      p: [
        "Nanak Migration Group is the trading name of 1313 Success Group Pty Ltd (ABN 54 674 937 476). Immigration assistance is provided by Navpreet Aulakh, Registered Migration Agent, MARN 2619467.",
        "You can verify the registration of any migration agent, including ours, on the Register of Migration Agents at mara.gov.au. We encourage you to do so before engaging anyone, including us.",
      ],
    },
    {
      h: "3. The rules we operate under",
      p: "Our practice is governed by:",
      table: {
        head: ["Instrument", "What it governs"],
        rows: [
          [
            "Migration Act 1958 (Cth)",
            "Who may lawfully give immigration assistance, and the registration and offence provisions that apply to migration agents",
          ],
          [
            "Migration Agents Regulations",
            "Registration requirements, professional standards and the disciplinary framework",
          ],
          [
            "Code of Conduct for Registered Migration Agents (March 2022)",
            "Our duties to clients, including honesty, competence, fee disclosure, confidentiality, record keeping and conflicts of interest",
          ],
          [
            "Privacy Act 1988 (Cth) and the Australian Privacy Principles",
            "How we collect, use, store and disclose your personal information",
          ],
          ["Australian Consumer Law", "Consumer guarantees, and the prohibition on misleading or deceptive conduct"],
          [
            "OMARA guidance, including on the use of artificial intelligence",
            "Regulator expectations about how the profession operates in practice",
          ],
        ],
      },
    },
    {
      h: "3.1 Code of Conduct availability",
      p: "The Code of Conduct is publicly available at mara.gov.au, and we will provide a copy on request.",
    },
    {
      h: "4. Professional responsibility and supervision",
      p: [
        "Every matter we take on is the professional responsibility of our registered migration agent. That does not change because a task is delegated, because support staff prepare a draft, or because a tool assisted with the work.",
        "All advice given to a client is given by the registered migration agent.",
        "All applications and submissions are reviewed and approved by the registered migration agent before lodgement.",
        "Support staff, whether in Australia or overseas, do not give immigration assistance and do not advise clients.",
        "Client files are maintained in a single practice management system so that work is traceable and reviewable.",
        "Under section 280 of the Migration Act, immigration assistance may only be given by a registered migration agent, an Australian legal practitioner or an exempt person. We take that limit seriously, including internally.",
      ],
    },
    {
      h: "5. Our overseas support office in India",
      p: [
        "We operate an overseas support office in India. We disclose this rather than leave it to be discovered, because your file is accessed there.",
        "Staff in that office perform preparation, document handling and administrative work. They do not give immigration assistance or advice.",
        "They work under the direction and supervision of our registered migration agent in Australia.",
        "They are bound by the same confidentiality, data handling and AI rules as our Australian staff, under written agreements.",
        "Access to client files is restricted to the staff who need it for the matter they are working on.",
        "Section 6 of our Privacy Policy explains what this means for your personal information and your rights.",
      ],
    },
    {
      h: "6. Conflicts of interest",
      p: [
        "We check for conflicts before accepting a matter and monitor for them as a matter progresses. Conflicts arise most often where we act for both a sponsor and a visa applicant, or for both partners in a relationship, or where a referrer has a commercial interest in the outcome.",
        "Where a conflict exists or may arise, we will tell you in writing, explain what it means for you, and either obtain your informed consent to continue or decline or cease to act. If our interests and yours cannot be reconciled, your interests come first and we stop acting.",
        "We disclose any commission, referral fee or other benefit we receive or pay in connection with your matter.",
      ],
    },
    {
      h: "7. Fees and client money",
      p: [
        "Our fees are agreed in writing before we start work and are set out in the service agreement you sign. Professional fees, Department of Home Affairs charges and third party costs such as skills assessments, medicals and translations are itemised separately, so you can see what is ours and what is not.",
        "Money we hold for Department charges and third party costs is held for that purpose and applied to it. We issue receipts and invoices for all amounts received. Our Refund Policy explains when and how fees are refunded.",
      ],
    },
    {
      h: "8. Confidentiality and data governance",
      p: "Confidentiality is a professional duty under section 35 of the Code of Conduct, not just a policy. It applies to everyone in the practice and to every system we use.",
      bullets: [
        "Individual logins and role based access to client files.",
        "Written confidentiality obligations in staff and contractor agreements, in Australia and overseas.",
        "Encrypted storage and transmission of client information.",
        "A single practice management system of record, rather than files scattered across personal devices and inboxes.",
        "Breach response under the Notifiable Data Breaches scheme, including notification to affected clients and the Office of the Australian Information Commissioner where required.",
      ],
    },
    {
      h: "9. Artificial intelligence governance",
      p: "We use AI in the practice, and we publish an Artificial Intelligence Policy that sets out exactly where and how. In governance terms the controls are:",
      bullets: [
        "AI is confined to drafting, summarising, filing and research support. It does not make decisions and it does not give immigration assistance.",
        "Client consent is obtained in writing before personal information is entered into an AI tool, and can be withdrawn at any time without affecting the fee.",
        "Only approved business account tools may be used. Free and personal AI accounts are prohibited on client work.",
        "Every AI assisted output is verified by the registered migration agent before it is used.",
        "Responsibility for any AI assisted output rests with the registered migration agent, not with the tool or the staff member who used it.",
      ],
    },
    {
      h: "10. Records",
      p: [
        "We keep the client records required by the Code of Conduct, including the service agreement, fee records, file notes, correspondence and copies of documents lodged. Records are retained for as long as required by the Code, the Migration Act, tax law and other applicable law, generally at least seven years after your matter concludes, and are then securely destroyed or de-identified.",
        "You may request access to your file. Our Privacy Policy explains how.",
      ],
    },
    {
      h: "11. Professional indemnity insurance",
      p: "We hold professional indemnity insurance as required for registration as a migration agent. Details of the current policy are available on request.",
    },
    {
      h: "12. Professional development",
      p: "Registered migration agents must complete continuing professional development each registration year to stay registered. We maintain that, and we monitor legislative and policy changes so that the advice you receive reflects the current program rather than last year’s.",
    },
    {
      h: "13. Complaints",
      p: "If you are unhappy with our service, tell us. Most problems are resolved quickly once someone knows about them.",
      table: {
        head: ["Step", "What happens"],
        rows: [
          [
            "1. Tell us",
            "Write to visa@nanakmigration.com.au or call 1300 644 728. Set out what happened and what you would like done.",
          ],
          ["2. We acknowledge", "We acknowledge your complaint within 5 business days and tell you who is handling it."],
          [
            "3. We investigate",
            "We review the file, speak to the staff involved and, where needed, ask you for more information.",
          ],
          [
            "4. We respond",
            "We respond in writing, usually within 30 days, explaining our findings and what we propose to do.",
          ],
          [
            "5. Escalation",
            "If you are not satisfied, you may complain to OMARA at mara.gov.au. Privacy complaints may go to the OAIC at oaic.gov.au. Complaining to a regulator does not cost you anything and does not affect your visa application.",
          ],
        ],
      },
    },
    {
      h: "13.1 Making a complaint",
      p: "We do not require you to withdraw a complaint as a condition of continuing to act for you, and we do not charge you for making one.",
    },
    {
      h: "14. Review",
      p: "We review this page and the policies it refers to at least annually, and whenever the law, the Code of Conduct or our own practices change.",
    },
    {
      h: "15. Contact",
      p: "Nanak Migration Group, 21 Ravenwoods Way, Craigieburn VIC 3064. Phone: 1300 644 728. Email: visa@nanakmigration.com.au.",
    },
    {
      h: "Disclaimer",
      p: "This page describes how our practice is governed. It is not legal advice and does not limit your rights under the Migration Act 1958 (Cth), the Code of Conduct for Registered Migration Agents, the Privacy Act 1988 (Cth) or the Australian Consumer Law.",
    },
  ],
}

export const REFUND_POLICY: PolicyDoc = {
  title: "Refund Policy",
  eyebrow: "Legal",
  description: "When fees are refundable, how refunds are calculated, and how to request one.",
  meta: ENTITY_META,
  sections: [
    {
      h: "1. Scope",
      p: [
        "This policy explains how we deal with refunds of fees paid to Nanak Migration Group. It applies alongside the service agreement you signed with us. Where this policy and your signed service agreement differ, the service agreement prevails.",
        "Nothing in this policy excludes, restricts or modifies any right or guarantee you have under the Australian Consumer Law, the Migration Act 1958 (Cth) or the Code of Conduct for Registered Migration Agents. Those rights apply regardless of what this policy says.",
      ],
    },
    {
      h: "2. What you pay, and who holds it",
      p: "Understanding the difference between these three amounts explains most refund outcomes.",
      table: {
        head: ["Amount", "Who receives it", "Refundable?"],
        rows: [
          [
            "Our professional fee",
            "Nanak Migration Group, for the work we do on your matter",
            "Refundable to the extent the work has not been performed. See section 4.",
          ],
          [
            "Department of Home Affairs charges",
            "The Australian Government, once your application is lodged",
            "Not refundable by us. See section 5.",
          ],
          [
            "Third party costs",
            "Skills assessing bodies, panel physicians, translators, police authorities and similar",
            "Refundable only if we still hold the money and it has not been paid on.",
          ],
        ],
      },
    },
    {
      h: "2.1 Itemisation",
      p: "Your service agreement itemises these separately so you can see what is ours and what is passed on.",
    },
    {
      h: "3. Cooling off",
      p: [
        "If you change your mind within 7 calendar days of signing your service agreement, and we have not yet lodged your application or paid any Department charge or third party cost on your behalf, we will refund your professional fee in full.",
        "If we have already lodged, or already paid money on your behalf, section 4 and section 5 apply instead.",
      ],
    },
    {
      h: "4. Refunds of our professional fee",
      p: [
        "We charge a single fixed professional fee, paid before work begins. If your engagement ends before the work is finished, whether you end it or we do, you are entitled to a refund of the portion of the fee that relates to work we have not performed.",
        "We assess that by reference to the stages below. This is the standard basis we apply, and we will explain how we applied it in writing.",
      ],
      table: {
        head: ["Stage", "What it covers", "Portion of fee"],
        rows: [
          [
            "1. Engagement and assessment",
            "File opening, identity and conflict checks, eligibility assessment and strategy advice",
            "20%",
          ],
          [
            "2. Preparation",
            "Document checklist, collection, review, follow up and client preparation",
            "25%",
          ],
          ["3. Drafting", "Preparing forms, statements, submissions and supporting material", "30%"],
          ["4. Lodgement", "Final review by the registered migration agent, lodgement and confirmation", "15%"],
          [
            "5. Post-lodgement",
            "Managing the application to decision, including responding to departmental requests",
            "10%",
          ],
        ],
      },
    },
    {
      h: "4.1 Partial stages and completed work",
      p: [
        "A stage that has been started but not completed is assessed on a fair and reasonable basis having regard to the work actually done. We keep file notes and time records so that this can be checked rather than asserted.",
        "If the work is complete, the fee has been earned and no refund is payable, whatever the outcome of the application.",
      ],
    },
    {
      h: "5. Department of Home Affairs charges",
      p: [
        "Once a visa application charge is paid to the Department, we no longer hold that money and we cannot refund it.",
        "Visa application charges are set by the Australian Government and are generally not refunded, including where an application is refused, withdrawn or found to be invalid. Refunds of Department charges are available only in the limited circumstances the Migration Regulations allow, and the decision is the Department’s, not ours.",
        "If you believe a Department refund may be available, tell us and we will help you make the request. We do not charge an additional fee for doing so.",
      ],
    },
    {
      h: "6. Where a refund is not payable",
      p: "To be clear about the boundaries:",
      bullets: [
        "A visa refusal, cancellation or adverse decision does not of itself entitle you to a refund. We are engaged to provide professional services competently, not to guarantee an outcome, and no registered migration agent can guarantee a visa.",
        "A change in migration law, policy, occupation lists or program settings after you engage us does not entitle you to a refund of work already performed.",
        "Delay by the Department of Home Affairs or a third party is not a basis for a refund of our fee.",
        "If you provide false, misleading or incomplete information, or fail to provide documents we have requested, and that causes the matter to fail or to be abandoned, the fee for work performed remains payable.",
        "None of this displaces your rights under the Australian Consumer Law. If our services were not provided with due care and skill, or not fit for the purpose you told us about, you may be entitled to a remedy including a refund, and section 7 applies.",
      ],
    },
    {
      h: "7. If our service fell short",
      p: [
        "Under the Australian Consumer Law our services must be provided with due care and skill, be fit for the purpose you made known to us, and be supplied within a reasonable time. These guarantees cannot be excluded.",
        "If they are not met, you are entitled to a remedy. For a minor problem we may resupply the service. For a major failure you may cancel and seek a refund, and you may claim compensation for reasonably foreseeable loss. We will not ask you to waive these rights, and we will not make a refund conditional on you withdrawing a complaint or signing a non disparagement term.",
      ],
    },
    {
      h: "8. How to request a refund",
      p: [
        "Submit a request through the refund request form on our website, or write to visa@nanakmigration.com.au. Please include your full name and the matter or file reference; what you are asking to be refunded, and the amount if you know it; why you are asking for it; and your bank details for the refund, if approved.",
      ],
      table: {
        head: ["Step", "Timeframe"],
        rows: [
          ["We acknowledge your request in writing", "Within 5 business days"],
          ["We review the file and assess the request", "Within 21 days"],
          ["We give you a written decision, including how any amount was calculated", "Within 30 days of your request"],
          ["We pay any approved refund", "Within 14 days of the decision"],
        ],
      },
    },
    {
      h: "8.1 Payment method",
      p: "Refunds are paid to the person who paid the fee, by bank transfer to an Australian account where possible. We do not charge a fee for processing a refund, though a third party bank or currency conversion cost may reduce the amount you receive on an international transfer.",
    },
    {
      h: "9. If you disagree with our decision",
      p: [
        "Tell us first, and we will review it. If you remain unsatisfied you may complain to the Office of the Migration Agents Registration Authority at mara.gov.au. OMARA can consider complaints about fees charged by a registered migration agent. Complaining costs you nothing and does not affect your visa application.",
        "You may also contact your State or Territory consumer affairs agency, or the Australian Competition and Consumer Commission, about your rights under the Australian Consumer Law.",
      ],
    },
    {
      h: "10. Contact",
      p: "Nanak Migration Group, 21 Ravenwoods Way, Craigieburn VIC 3064. Phone: 1300 644 728. Email: visa@nanakmigration.com.au.",
    },
    {
      h: "Disclaimer",
      p: "This policy describes our refund practice. It is not legal advice and does not limit your rights under the Australian Consumer Law, the Migration Act 1958 (Cth) or the Code of Conduct for Registered Migration Agents.",
    },
  ],
}

export const TERMS_OF_USE: PolicyDoc = {
  title: "Website Terms of Use",
  eyebrow: "Legal",
  description: "The terms on which you may use nanakmigration.com.au.",
  meta: ENTITY_META,
  sections: [
    {
      h: "1. Acceptance",
      p: [
        "These terms govern your use of nanakmigration.com.au and any tool, form, calculator, assessment or chat feature on it. By using the site you accept them. If you do not accept them, please do not use the site.",
        "These terms apply to the website only. If you engage us to act for you, the terms of that engagement are set out in the service agreement you sign with us. Where these terms and a signed service agreement differ, the service agreement prevails.",
      ],
    },
    {
      h: "2. This website does not give you immigration assistance",
      p: [
        "Nothing on this website is immigration assistance, legal advice, or advice about your particular circumstances.",
        "Under section 280 of the Migration Act 1958 (Cth), immigration assistance in Australia may only be given by a registered migration agent, an Australian legal practitioner or an exempt person. Immigration assistance is given to you only after you engage us and a registered migration agent takes carriage of your matter.",
        "Information on this site is general in nature. It does not take account of your circumstances, your history, your documents or the current state of a program you may be interested in. Migration law, policy and program settings change frequently and often without notice.",
        "You should not act, or decide not to act, on the basis of anything on this site without first obtaining advice from a registered migration agent or an Australian legal practitioner about your own situation.",
      ],
    },
    {
      h: "3. Assessment tools, chat features and forms",
      p: [
        "We may make available on this site tools that ask you questions and suggest a visa pathway, eligibility indicator, points estimate or similar output. These tools exist to help you decide whether to speak to us. They are not an assessment of your eligibility.",
        "The output is generated automatically. No registered migration agent has reviewed your answers before the output is produced.",
        "The output is indicative only, is based entirely on the limited information you enter, and may be wrong for your circumstances.",
        "The output is not a recommendation that you apply for any visa, and it is not a statement that you are or are not eligible.",
        "Using a tool, submitting a form or starting a chat does not engage us, does not create an agent and client relationship, and does not create any duty on our part to act for you or to follow up.",
        "You are engaged as a client only when we have both signed a service agreement.",
        "Information you submit through a form, tool or chat is handled in accordance with our Privacy Policy.",
      ],
    },
    {
      h: "4. Accuracy and currency",
      p: [
        "We take reasonable care with the content on this site, but we do not warrant that it is accurate, complete or current. Visa criteria, occupation lists, fees, processing times and departmental policy change regularly, and content may not reflect a change at the time you read it.",
        "Any processing time, fee, success rate or outcome mentioned on this site is indicative. We do not guarantee any outcome in any matter. Visa decisions are made by the Department of Home Affairs, not by us.",
      ],
    },
    {
      h: "5. Intellectual property",
      p: [
        "We own or license all content on this site, including text, graphics, logos, images, layout, video and software. It is protected by copyright and other laws.",
        "You may view, download and print content from this site for your own personal, non-commercial use, provided you do not remove any copyright or ownership notice. You must not otherwise copy, reproduce, republish, distribute, adapt, frame or commercially exploit any part of the site without our written permission.",
        "The Nanak Migration Group name, logo and branding must not be used without our written permission.",
      ],
    },
    {
      h: "6. Acceptable use",
      p: "You must not:",
      bullets: [
        "Use the site for any unlawful purpose or in breach of these terms.",
        "Submit false, misleading or fraudulent information, or information about another person without their authority.",
        "Attempt to gain unauthorised access to the site, our systems or any account, or interfere with the site’s operation or security.",
        "Introduce any virus, malware or harmful code.",
        "Scrape, harvest, data mine or use automated means to extract content, or use content to train a machine learning or AI model, without our written permission.",
        "Use the site to send unsolicited commercial messages, or to impersonate any person.",
      ],
    },
    {
      h: "6.1 Suspension",
      p: "We may suspend or withdraw access to the site, or to any feature of it, at any time and without notice.",
    },
    {
      h: "7. Third party links and content",
      p: "This site may link to third party websites, including Department of Home Affairs pages, skills assessing authorities and other resources. We provide those links for convenience. We do not control those sites, we are not responsible for their content or their handling of your information, and a link is not an endorsement. You access them at your own risk and subject to their own terms.",
    },
    {
      h: "8. Privacy",
      p: "Our Privacy Policy explains how we collect, use, store and disclose personal information, including information you submit through this site, where it may be processed, and our use of cookies and analytics. Our Artificial Intelligence Policy explains how AI is used in our practice. Both form part of these terms.",
    },
    {
      h: "9. Liability",
      p: [
        "Certain rights and guarantees under the Australian Consumer Law cannot be excluded, restricted or modified. Nothing in these terms excludes, restricts or modifies those rights, and nothing in these terms operates to exclude liability that cannot lawfully be excluded.",
        "Subject to that, and to the maximum extent permitted by law:",
      ],
      bullets: [
        "We exclude all warranties, representations and conditions that are not expressly set out in these terms.",
        "We are not liable for any loss or damage, including indirect, special or consequential loss, loss of profit or loss of opportunity, arising from your use of, or inability to use, this site or anything on it.",
        "We are not liable for any decision you make, or do not make, in reliance on content or tool output on this site.",
        "We do not warrant that the site will be uninterrupted, error free or free of harmful components.",
        "Where our liability can be limited but not excluded, our liability is limited to resupplying the relevant service or paying the cost of having it resupplied.",
      ],
    },
    {
      h: "10. Changes to these terms",
      p: "We may change these terms at any time by publishing an updated version on this page. The version in force is the one published at the time you use the site. Please check this page from time to time.",
    },
    {
      h: "11. Governing law",
      p: [
        "These terms are governed by the laws of Victoria, Australia. You submit to the non-exclusive jurisdiction of the courts of Victoria and of the Commonwealth of Australia.",
        "This site is directed at users in Australia and at people seeking Australian visas from overseas. If you access it from another country, you do so at your own risk and you are responsible for complying with the laws that apply to you.",
      ],
    },
    {
      h: "12. Contact",
      p: "Nanak Migration Group, 21 Ravenwoods Way, Craigieburn VIC 3064. Phone: 1300 644 728. Email: visa@nanakmigration.com.au.",
    },
    {
      h: "Disclaimer",
      p: "These terms govern use of this website. They are not legal advice and do not affect your rights under the Australian Consumer Law, the Migration Act 1958 (Cth) or the Code of Conduct for Registered Migration Agents.",
    },
  ],
}

export const ACCESSIBILITY_POLICY: PolicyDoc = {
  title: "Accessibility",
  eyebrow: "Practice",
  description: "Our commitment to making this website and our services usable by everyone.",
  meta: ENTITY_META,
  sections: [
    {
      h: "1. Our commitment",
      p: [
        "Our clients come to us from many countries, in many languages, and at every level of digital confidence. Some have a disability. Some are using a phone on a slow connection in another time zone. Accessibility is not a side issue for a migration practice, it is most of our audience.",
        "We are committed to making nanakmigration.com.au and our services usable by as many people as possible, and to meeting our obligations under the Disability Discrimination Act 1992 (Cth).",
      ],
    },
    {
      h: "2. The standard we are working to",
      p: [
        "We are working towards conformance with the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA, the standard generally applied in Australia.",
        "We have not yet had this website independently audited against WCAG 2.2, so we do not claim that it currently conforms.",
        "We would rather say that plainly than publish a conformance claim we cannot support. We have commissioned a review of the site against WCAG 2.2 Level AA and will publish the results and a remediation timetable on this page when it is complete.",
      ],
    },
    {
      h: "3. What we are doing in the meantime",
      p: "As we build and maintain the site we aim to:",
      bullets: [
        "Use clear, plain English and avoid unnecessary jargon, since many of our readers are not native English speakers.",
        "Provide text alternatives for meaningful images.",
        "Use headings and structure so screen readers can navigate pages logically.",
        "Maintain sufficient colour contrast and avoid relying on colour alone to convey meaning.",
        "Make the site usable on a keyboard, without a mouse.",
        "Make forms usable, with labels and clear error messages.",
        "Keep the site responsive so it works on phones and small screens.",
        "Avoid content that flashes, moves or auto-plays in a way that causes difficulty.",
      ],
    },
    {
      h: "3.1 Ongoing assessment",
      p: "We assess accessibility when we add new pages, forms or tools, rather than treating it as a one-off project.",
    },
    {
      h: "4. Known limitations",
      p: "Because the site has not been formally audited, we cannot list every barrier. Areas we are reviewing first are:",
      bullets: [
        "PDF documents, which may not be fully tagged for screen readers.",
        "Interactive tools, forms and chat features on the site.",
        "Third party content we embed, such as maps, booking tools and video, where accessibility depends partly on the provider.",
        "Colour contrast in older parts of the site.",
      ],
    },
    {
      h: "4.1 Your feedback helps",
      p: "If you hit a barrier, please tell us. Real reports from real users are more useful than any checklist, and they go to the front of the queue.",
    },
    {
      h: "5. If you cannot access something",
      p: [
        "We will not let a website problem stand between you and your matter. If any part of this site or our service is difficult for you to use, contact us and we will help you directly and at no extra cost.",
        "We can:",
      ],
      bullets: [
        "Provide information in an alternative format, including large print, plain text or an accessible document.",
        "Read information to you, or take your information, over the phone.",
        "Complete a form with you rather than asking you to complete it online.",
        "Meet you in person or by video call instead of by email.",
        "Work with your support person, carer, family member or advocate, with your consent.",
      ],
    },
    {
      h: "6. Language support",
      p: [
        "We assist clients in English, Punjabi and Hindi. If you need another language, we can arrange an interpreter. The Australian Government also provides the free Translating and Interpreting Service (TIS National) on 131 450, which you can use to speak to us.",
        "Language assistance is part of accessibility for our client base, not an optional extra.",
      ],
    },
    {
      h: "7. Assistive services",
      p: "If you are deaf, or have a hearing or speech impairment, you can contact us through the National Relay Service:",
      table: {
        head: ["Service", "How to use it"],
        rows: [
          ["National Relay Service", "Visit accesshub.gov.au and ask for 1300 644 728"],
          ["TTY users", "Call 133 677, then ask for 1300 644 728"],
          ["Speak and Listen", "Call 1300 555 727, then ask for 1300 644 728"],
          ["Interpreter (TIS National)", "Call 131 450 and ask to be connected to 1300 644 728"],
        ],
      },
    },
    {
      h: "8. Our office",
      p: "If you are visiting us in person and have an access requirement, including parking, step-free access, seating or a quiet space, tell us when you book and we will make arrangements. If our premises cannot meet your needs on the day, we will meet you somewhere that can, or by video call.",
    },
    {
      h: "9. Feedback and complaints",
      p: [
        "We want to hear about accessibility problems. Contact us with the page address, what you were trying to do, what went wrong, and the device, browser or assistive technology you were using if you know it.",
        "We acknowledge accessibility feedback within 5 business days and tell you what we intend to do about it and when. If we cannot fix something quickly, we will tell you honestly and give you an alternative way to get what you need.",
        "If you are not satisfied with our response, you may make a complaint to the Australian Human Rights Commission at humanrights.gov.au or on 1300 656 419.",
      ],
    },
    {
      h: "10. Contact",
      p: "Nanak Migration Group, 21 Ravenwoods Way, Craigieburn VIC 3064. Phone: 1300 644 728. Email: visa@nanakmigration.com.au.",
    },
    {
      h: "11. Review",
      p: "We review this statement at least annually and after any significant change to the website. It will be updated when the WCAG 2.2 Level AA review is complete.",
    },
    {
      h: "Disclaimer",
      p: "This statement describes our current accessibility position and our commitments. It is not a claim of conformance with WCAG 2.2 Level AA.",
    },
  ],
}
