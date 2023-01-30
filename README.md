# Meroshare

Meroshare is Cypress automation that applies share (Ordinary Share).

## Github Actions
### Pre-requisite
- Create a private repository and name it "meroshare"
- Import code using this url https://github.com/rojalbati/meroshare

### Personal
- Goto "settings"
- Click "Secrets"
- Click "Actions"
<img width="1204" alt="image" src="https://user-images.githubusercontent.com/54777753/190581093-d12838a7-b969-4e21-ad23-95bb1508a6f2.png">

- Add these repository secrets
1. MY_DEPOSITORY_PARTICIPANTS
2. MY_USERNAME
3. MY_PASSWORD
4. MY_CRN
5. MY_PIN

- Ensure repository secrets are added under "Repository secrets" Section
<img width="785" alt="image" src="https://user-images.githubusercontent.com/54777753/190580010-48870d39-7724-46f3-84f4-2a8b951cad28.png">

- Visit workflow "Apply Share: Personal" and run Workflow
<img width="1338" alt="image" src="https://user-images.githubusercontent.com/54777753/190580114-4cc15a1d-08d3-484b-9967-7499ab88abf4.png">


### Family
- Ensure these repository secrets are present (If not, add these repository secrets)
1. MY_DEPOSITORY_PARTICIPANTS
2. MY_USERNAME
3. MY_PASSWORD
4. MY_CRN
5. MY_PIN
6. DAD_DEPOSITORY_PARTICIPANTS
7. DAD_USERNAME
8. DAD_PASSWORD
9. DAD_CRN
10. DAD_PIN
11. MOM_DEPOSITORY_PARTICIPANTS
12. MOM_USERNAME
13. MOM_PASSWORD
14. MOM_CRN
15. MOM_PIN

- Visit workflow "Apply Share: Family" and run Workflow


## Installation: Locally

1. Clone the repository

```
git clone git@github.com:rojalbati/meroshare.git
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

