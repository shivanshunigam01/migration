# Internal linking specification — Nanak Migration

Hub-and-spoke internal links for Phase 1 service pages (employer-sponsored, skilled, student, partner clusters).

## 1. Principles

- Prefer real `<a href>` / React Router `<Link>` navigation (crawlable).
- Place **3–5 contextual links inside body copy** (AnswerBox + eligibility / process paragraphs).
- Do **not** dump these in a “Related links” footer — `RelatedPages` cards are separate.
- Anchor text should read naturally in the sentence (no “click here”).
- Link hub ↔ spokes and sideways within the same cluster (and cross-cluster only where the copy already names the destination).

## 2. Contextual in-body links

### employer-sponsored-visas
- "Skills in Demand (subclass 482)" → `/skills-in-demand-visa`
- "Employer Nomination Scheme (subclass 186)" → `/employer-nomination-scheme`
- "Standard Business Sponsorship" → `/standard-business-sponsorship`
- "482 to PR pathway" → `/482-to-pr-pathway`
- "186 occupations list" → `/186-occupations-list`

### employer-nomination-scheme
- "Standard Business Sponsorship" → `/standard-business-sponsorship`
- "subclass 482" → `/skills-in-demand-visa`
- "Temporary Residence Transition" → `/482-to-pr-pathway`
- "skills assessment" → `/186-skill-requirements`
- "competent English" → `/english-requirements`

### 186-skill-requirements
- "Employer Nomination Scheme (subclass 186)" → `/employer-nomination-scheme`
- "skills assessment" → `/skills-assessment`
- "186 occupations list" → `/186-occupations-list`
- "subclass 482" → `/skills-in-demand-visa`
- "Temporary Residence Transition" → `/482-to-pr-pathway`

### 186-occupations-list
- "Employer Nomination Scheme (subclass 186)" → `/employer-nomination-scheme`
- "Temporary Residence Transition" → `/482-to-pr-pathway`
- "subclass 482" → `/skills-in-demand-visa`
- "Core Skills Occupation List" → `/core-skills-occupation-list`
- "skills assessment" → `/186-skill-requirements`

### skills-in-demand-visa
- "Standard Business Sponsorship" → `/standard-business-sponsorship`
- "Employer Nomination Scheme (subclass 186)" → `/employer-nomination-scheme`
- "482 to PR pathway" → `/482-to-pr-pathway`
- "Core Skills Occupation List" → `/core-skills-occupation-list`
- "employer-sponsored visas" → `/employer-sponsored-visas`

### 482-to-pr-pathway
- "Skills in Demand (subclass 482)" → `/skills-in-demand-visa`
- "Employer Nomination Scheme (subclass 186)" → `/employer-nomination-scheme`
- "Temporary Residence Transition" → `/employer-nomination-scheme`
- "Standard Business Sponsorship" → `/standard-business-sponsorship`
- "186 skill requirements" → `/186-skill-requirements`

### standard-business-sponsorship
- "Skills in Demand (subclass 482)" → `/skills-in-demand-visa`
- "Employer Nomination Scheme (subclass 186)" → `/employer-nomination-scheme`
- "employer-sponsored visas" → `/employer-sponsored-visas`
- "482 to PR pathway" → `/482-to-pr-pathway`
- "Core Skills Occupation List" → `/core-skills-occupation-list`

### core-skills-occupation-list
- "Skills in Demand (subclass 482)" → `/skills-in-demand-visa`
- "Employer Nomination Scheme (subclass 186)" → `/employer-nomination-scheme`
- "186 occupations list" → `/186-occupations-list`
- "482 to PR pathway" → `/482-to-pr-pathway`
- "employer-sponsored visas" → `/employer-sponsored-visas`

### skilled-migration
- "points test" → `/points-test`
- "Skilled Independent (subclass 189)" → `/skilled-independent-189`
- "Skilled Nominated (subclass 190)" → `/skilled-nominated-190`
- "Skilled Work Regional (subclass 491)" → `/skilled-work-regional-491`
- "skills assessment" → `/skills-assessment`

### skilled-independent-189
- "points test" → `/points-test`
- "skills assessment" → `/skills-assessment`
- "Skilled Nominated (subclass 190)" → `/skilled-nominated-190`
- "Skilled Work Regional (subclass 491)" → `/skilled-work-regional-491`
- "skilled migration" → `/skilled-migration`

### skilled-nominated-190
- "state nomination" → `/state-nomination`
- "points test" → `/points-test`
- "skills assessment" → `/skills-assessment`
- "Skilled Independent (subclass 189)" → `/skilled-independent-189`
- "Skilled Work Regional (subclass 491)" → `/skilled-work-regional-491`

### skilled-work-regional-491
- "state nomination" → `/state-nomination`
- "points test" → `/points-test`
- "Skilled Nominated (subclass 190)" → `/skilled-nominated-190`
- "skills assessment" → `/skills-assessment`
- "skilled migration" → `/skilled-migration`

### temporary-graduate-485
- "student visa (subclass 500)" → `/student-visa-500`
- "skills assessment" → `/skills-assessment`
- "Skilled Independent (subclass 189)" → `/skilled-independent-189`
- "student to PR pathway" → `/student-to-pr-pathway`
- "skilled migration" → `/skilled-migration`

### points-test
- "Skilled Independent (subclass 189)" → `/skilled-independent-189`
- "Skilled Nominated (subclass 190)" → `/skilled-nominated-190`
- "Skilled Work Regional (subclass 491)" → `/skilled-work-regional-491`
- "English requirements" → `/english-requirements`
- "state nomination" → `/state-nomination`

### skills-assessment
- "points test" → `/points-test`
- "Skilled Independent (subclass 189)" → `/skilled-independent-189`
- "employer-sponsored visas" → `/employer-sponsored-visas`
- "186 skill requirements" → `/186-skill-requirements`
- "Skills in Demand (subclass 482)" → `/skills-in-demand-visa`

### state-nomination
- "Skilled Nominated (subclass 190)" → `/skilled-nominated-190`
- "Skilled Work Regional (subclass 491)" → `/skilled-work-regional-491`
- "points test" → `/points-test`
- "skilled migration" → `/skilled-migration`
- "skills assessment" → `/skills-assessment`

### english-requirements
- "Skills in Demand (subclass 482)" → `/skills-in-demand-visa`
- "Employer Nomination Scheme (subclass 186)" → `/employer-nomination-scheme`
- "skilled migration" → `/skilled-migration`
- "skills assessment" → `/skills-assessment`
- "points test" → `/points-test`

### student-visas
- "Student visa (subclass 500)" → `/student-visa-500`
- "Genuine Student requirement" → `/genuine-student-requirement`
- "Temporary Graduate (subclass 485)" → `/temporary-graduate-485`
- "student to PR pathway" → `/student-to-pr-pathway`
- "English requirements" → `/english-requirements`

### student-visa-500
- "Genuine Student requirement" → `/genuine-student-requirement`
- "Temporary Graduate (subclass 485)" → `/temporary-graduate-485`
- "student to PR pathway" → `/student-to-pr-pathway`
- "student visas" → `/student-visas`
- "English requirements" → `/english-requirements`

### genuine-student-requirement
- "student visa (subclass 500)" → `/student-visa-500`
- "student visas" → `/student-visas`
- "student to PR pathway" → `/student-to-pr-pathway`
- "English requirements" → `/english-requirements`
- "Temporary Graduate (subclass 485)" → `/temporary-graduate-485`

### student-to-pr-pathway
- "Temporary Graduate (subclass 485)" → `/temporary-graduate-485`
- "skills assessment" → `/skills-assessment`
- "Skilled Independent (subclass 189)" → `/skilled-independent-189`
- "Skilled Nominated (subclass 190)" → `/skilled-nominated-190`
- "employer-sponsored visas" → `/employer-sponsored-visas`

### partner-family-visas
- "partner visa offshore (subclass 309/100)" → `/partner-visa-309-100`
- "partner visa onshore (subclass 820/801)" → `/partner-visa-820-801`
- "Prospective Marriage (subclass 300)" → `/prospective-marriage-300`
- "partner visa evidence" → `/partner-visa-evidence`
- "parent visas" → `/parent-visas`

### partner-visa-820-801
- "partner and family visas" → `/partner-family-visas`
- "partner visa offshore (subclass 309/100)" → `/partner-visa-309-100`
- "partner visa evidence" → `/partner-visa-evidence`
- "Prospective Marriage (subclass 300)" → `/prospective-marriage-300`
- "bridging visas" → `/bridging-visas`

### partner-visa-309-100
- "partner and family visas" → `/partner-family-visas`
- "partner visa onshore (subclass 820/801)" → `/partner-visa-820-801`
- "partner visa evidence" → `/partner-visa-evidence`
- "Prospective Marriage (subclass 300)" → `/prospective-marriage-300`
- "partner visa evidence guide" → `/partner-visa-evidence`

### prospective-marriage-300
- "partner visa onshore (subclass 820/801)" → `/partner-visa-820-801`
- "partner visa offshore (subclass 309/100)" → `/partner-visa-309-100`
- "partner and family visas" → `/partner-family-visas`
- "partner visa evidence" → `/partner-visa-evidence`
- "partner visa evidence guide" → `/partner-visa-evidence`

### partner-visa-evidence
- "partner and family visas" → `/partner-family-visas`
- "partner visa onshore (subclass 820/801)" → `/partner-visa-820-801`
- "partner visa offshore (subclass 309/100)" → `/partner-visa-309-100`
- "Prospective Marriage (subclass 300)" → `/prospective-marriage-300`
- "partner visa application" → `/partner-family-visas`
