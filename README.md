# Meroshare

Meroshare is Cypress automation that applies share (Ordinary Share).

## Installation: Locally

1. Clone the repository

```
git clone git@github.com:rojalbati-cf/meroshare.git
```

2. In `cypress.config.js`, set the value of Environment Variables

3. Install dependencies
```
npm install
```

4. Apply Share
```
npx cypress run
```

## Github Actions 
### Personal
Ensure these repository secrets are upto date (If it doesn't exist, simply create)
1. MY_DEPOSITORY_PARTICIPANTS
2. MY_USERNAME
3. MY_PASSWORD
4. MY_BANK
5. MY_CRN
6. MY_PIN

Visit workflow and run:
https://github.com/rojalbati/meroshare/actions/workflows/personal.yml

### Family
Ensure these repository secrets are upto date (If it doesn't exist, simply create)
1. MY_DEPOSITORY_PARTICIPANTS
2. MY_USERNAME
3. MY_PASSWORD
4. MY_BANK
5. MY_CRN
6. MY_PIN
7. DAD_DEPOSITORY_PARTICIPANTS
8. DAD_USERNAME
9. DAD_PASSWORD
10. DAD_BANK
11. DAD_CRN
12. DAD_PIN
13. MOM_DEPOSITORY_PARTICIPANTS
14. MOM_USERNAME
15. MOM_PASSWORD
16. MOM_BANK
17. MOM_CRN
18. MOM_PIN

Visit workflow and run:
https://github.com/rojalbati/meroshare/actions/workflows/family.yml
