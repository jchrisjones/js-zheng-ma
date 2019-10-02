# R3 javascript Paired Interview

During this interview you will be pair-programming with your interviewer, creating an X500 name parser class using TDD. There is some basic documentation below about [X500 names](#x500-names) if you are unfamiliar with them. We'll start by writing a test case, then the other person writes code to pass the test and write the next test case, then the other person passes that test case and so on.

## Interview Format

1. Using Git, clone the repository `https://github.com/r3-appeng-interviews/js-<yourFirstName>-<yourLastName>`
2. Checkout new branch from "master" called "interview/{your name}.
3. Follow the [Setup](#setup) steps on the project README.md.
4. Run the test suite with the initial test. We are using Jest as our testing framework.
5. Using TDD, implement the convertX500 class.
6. At the end of the interview commit and push your code to the remote repository

The format will be:

* The interviewer will write the initial test.
* Pass across to the interviewee who will make the test pass.
* Possible discussion on what to implement next.
* The interviewee will then write the next test.
* Pass across to the interviewer will make the test pass.
* Lastly, commit your code in git and push your branch to the remote repository.

This is an 'open book' interview, so feel free to use the internet to look up anything or to ask the interviewer any questions.

## Setup

* In the terminal do the following:
  
```bash
  > cd ./js-<yourFirstName>-<yourLastName>
  > npm install
  > npm test -- --watch
```

This will install all the nodejs dependencies to the project and start running the test suite. In this interview we will be using the Jest testing framework. If you are unfamiliar with Jest there is a basic cheat sheet [here][Jest CheatSheet] to help you write your tests.

## X500 Names

X500 names are used to represent references to entities in the X5xx family of standards (for example the X509 certificate standard).

Below are typical sub-parts of an X500 name:

* organizationName - large organization name, e.g., "Acme.Inc"
* localityName - locality (city) name, e.g., "Area 51"
* country - two-letter country code, e.g., "US"
* organizationUnit - small organization (e.g, department or division) name, e.g., "Explosives"
* commonName - common name of a person, e.g., "Amanda Jones"
* stateName - state or province name, e.g., "Nevada"
  
When supplying a name the string must be in the following format:

```bash
  O=${org},OU=${orgUnit},L=${city},C=${countryCode},CN=${cName},S=${state}
```

where all the ${someText} items represent actual values and the keywords are abbreviations for the following:

```json
O=organizationName
L=localityName
C=countryCopy

CN=commonName
OU=organizationUnit
S=stateName
```

A sample name string is

<pre>CN=John Smith,OU=Engineering,O=R3,L=City of London,S=Greater London,C=GB</pre>

The 3 essential fields for a valid Corda X500 name are the O, L, C, fields. So:

<pre>O=R3,L=City of London,C=GB</pre>

is a valid X500 name.

## Useful Links

* [Jest CheatSheet]
* [X500 Definition]

[Jest CheatSheet]: https://devhints.io/jest
[X500 Definition]: https://www.ibm.com/support/knowledgecenter/en/SSYKE2_7.1.0/com.ibm.java.security.component.71.doc/security-component/keytoolDocs/x500dnames.html
