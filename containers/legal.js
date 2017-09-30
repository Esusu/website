import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

import { 
  Section, 
  Block,
  Spacer } from '../components/atoms/layout'

import {
  Title,
  Subtitle,
  Subheading,
  Paragraph } from '../components/atoms/typography'

export default class extends React.Component {
  static async getInitialProps({ req, query }) {
    return {}
  }

  render() {
    return (
      <Wrapper>
        <Head>
          <title>Esusu | Legal Information & Notices</title>
        </Head>
        <Section>
          <Block p={[4]} center>
            <Title color="#000" fontSize="3em" light>Legal Information & Notices</Title>
          </Block>
        </Section>
        <Section id="top">
          <Block p={[1, 2, 3, 4]}>
            <TopLink href="#top">Terms of Service</TopLink>
            <SectionLink href="#use">User Affirmations, Conduct and Use</SectionLink>
            <SectionLink href="#service">License to the Service</SectionLink>
            <SectionLink href="#dispute">Dispute Resolution Provision</SectionLink>
            <Spacer />
            <Flex column>
              <Box>
                 <TextWrapper>
                   <Subtitle fontSize="1.25em" color="#4A4A4A">Terms of Service</Subtitle>
                   <Subtitle fontSize="1em" color="#60c091" light uppercase>Last Updated: June 1, 2017</Subtitle>
                   <Subheading color="#4a4a4a" fontSize="1.25em">
                      Acceptance of Terms
                    </Subheading>
                    <Paragraph color="#000" fontSize="1em">
                      Welcome to Esusu (www.esusu.today/), owned and operated by Esusu, Inc.&nbsp;(&ldquo;Esusu&rdquo;). In these Terms,&nbsp;&ldquo;you&rdquo;&nbsp;and&nbsp;&ldquo;your&rdquo;&nbsp;refer to the individual that uses the Service.&nbsp;&ldquo;We&rdquo;,&nbsp;&ldquo;us&rdquo;, or&nbsp;&ldquo;our&rdquo;&nbsp;also refer to Esusu.
                    </Paragraph><br />
                        <Paragraph color="#000" fontSize="1em">
                          Esusu provides an online platform, process and service that allows users to connect directly with each other to share money among themselves (the&nbsp;&ldquo;Service&rdquo;). By using the Service, you agree to comply with and be legally bound by the terms and conditions of these Terms of Service (&ldquo;Terms&rdquo;) whether or not you become a registered user of the Service. These Terms govern your access to and use of the Service and constitute a binding legal agreement between you and Esusu. Please read carefully these Terms, and our Privacy Policy (at&nbsp;
                        <a href="http://www.esusu.today">
                            www.esusu.today
                        </a>
                          ). If you do not agree to these Terms, you have no right to obtain information from or otherwise continue using the Service.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                          YOU UNDERSTAND AND AGREE THAT ESUSU IS NOT A PARTY TO ANY AGREEMENTS ENTERED INTO BETWEEN USERS, AND THAT ESUSU IS NOT A BANK, A MONEY SERVICES BUSINESS, A MONEY TRANSMITTER, OR AN ISSUER OF STORED VALUE PRODUCTS. ESUSU AND THE SERVICE ENABLE USERS TO COMMUNICATE DIRECTLY AND TO SHARE FUNDS AMONG THEMSELVES. ESUSU HAS NO CONTROL OVER THE CONDUCT OF USERS OF THE SERVICE, ANY INFORMATION EXCHANGED BETWEEN USERS, OR ANY SHARING DECISIONS BY OR AMONG USERS, AND DISCLAIMS ALL LIABILITY IN THIS REGARD.
                        </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    ESUSU DOES NOT REVIEW, ENDORSE, RECOMMEND, VERIFY OR EVALUATE, OR OTHERWISE PROVIDE ANY WARRANTY OR GUARANTEE WITH RESPECT TO ANY USER, USER CONTENT, OR USER GROUP. IT IS THE SOLE RESPONSIBILITY OF USERS TO INVESTIGATE THE INFORMATION AVAILABLE ABOUT ANOTHER USER OR A GROUP.
                  </Paragraph><br />
                  <Subheading color="#4a4a4a" fontSize="1.25em">
                          Definitions
                        </Subheading>
                  <Paragraph color="#000" fontSize="1em">
                    &ldquo;Group&rdquo;&nbsp;means two or more Users who form a group to use the Service to share funds between and among all Users in the same group.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    &ldquo;Content&rdquo;&nbsp;means text, graphics, images, music, software, audio, video, information or other materials.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    &ldquo;User&rdquo;&nbsp;means a person who successfully completes Esusu&rsquo;s registration process.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    &ldquo;Group Leader&rdquo; means a user who forms and launches a group.
                  </Paragraph><br />
                  <Subheading color="#4a4a4a" fontSize="1.25em">
                    How to Join the Service
                  </Subheading>
                  <Paragraph color="#000" fontSize="1em">
                    The Service consists of an online platform, process and service that allows Users to participate in one or more Groups within which they can share money with other Users in that Group. To become a User and access the Service, you must: (a) successfully complete the online registration process on our mobile application &ldquo;Esusu&rdquo; available on the Apple Store, (b) agree to the provision of personal identification information and (c) connect your personal bank or other financial account to the Service.
                  </Paragraph><br />
                  <Subheading color="#4a4a4a" fontSize="1.25em">
                    How the Service Works
                  </Subheading>
                  <Paragraph color="#000" fontSize="1em">
                    Money is shared by and between all Users who have joined a Group. Within a Group, every member contributes the same amount in installments over the life-time of the Group, and every member of a Group withdraws about the same amount but at different times. All installment payments are distributed to one member of the Group at the same time that the installment payments are made less transaction costs and a flat Esusu fee.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    The following illustrative example demonstrates on Esusu savings groups work. Sharing within a group is according to a Users &ldquo;Position&rdquo; in the Group. This is randomized with the Group Creator having the ability to change the &ldquo;Position&rdquo; before the effective start date of the Group. For instance, take the example of a Group of 12 Members and 12 Positions, with a 12-month life-time, and monthly collections. each member will contribute a fixed amount (e.g. $100) and each members respective pay-out date, will receive the lump-sum of payments for that month, in this example $1200, minus transaction fees and a flat Esusu service fee.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    Groups may be formed by any User who is then termed the &ldquo;Group Leader&rdquo;. A User forming a Group determines the four key characteristics of the Group: (1) the amount to be shared by each User who joins the Group in total; (2) how long the Group will go on (it&rsquo;s life-time); (3) how many Users and Positions there are in the Group (one Position per User) (4) the frequency of payments into theGgroup and payments out of the group;
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    Failure to contribute funds to a Group at the time and in the amounts that a User agreed to do will subject a User to limited or restricted access to the Service, including preclusion of joining more Groups or receiving shared funds distributions from any Groups that User has previously joined. A User&rsquo;s failure to meet his or her Group contribution commitments for more than ten (10) days past the original due date will entitle the Service to withdraw the full amounts owed directly from the User&rsquo;s connected bank account. Should the user have insufficient funds, Esusu will insure the payment on the users behalf and contribute their outstanding payments until the Group is termed.
                  </Paragraph><br />
                  <Subheading color="#4a4a4a" fontSize="1.25em">
                    Service Fees
                  </Subheading>
                  <Paragraph color="#000" fontSize="1em">
                    In exchange for providing the Service, Esusu receives from each User receiving shared funds from a Group a fee (the &ldquo;Service Fee&rdquo;) equal to a set percentage of the shared amount. The exact Service Fee amount will be set for each Group upon creation and will be a flat fee on each the payout to a User in the payout Position. This will be based on group transaction size but will be a in the range of $5 to $20. After deducting the applicable Service Fee, Esusu will remit the balance of the shared funds to the User via its third party provider&nbsp;
                      <a href="https://www.synapsepay.com/">
                      www.synapsepay.com
                    </a>
                    &nbsp;or such other payment methods as may be listed on the Service, in U.S. dollars. Except as otherwise provided herein, Service Fees are non-refundable.
                  </Paragraph><br />
                  <Subheading color="#4a4a4a" fontSize="1.25em">
                    Financial Terms Information
                  </Subheading>
                  <Paragraph color="#000" fontSize="1em">
                    By entering into these Terms, you also agree to the terms and conditions of SynapsePay, our banking software and payment processing provider which can be found here [
                    <a href="https://synapsepay.com/legal">
                      https://synapsepay.com/legal
                    </a>
                    &nbsp;] and are incorporated by this reference.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    By entering these Terms, you are also authorizing Esusu (or its third party payment processor) to debit the bank account you associated with your User Account for all amounts that you agree to contribute to a Group, and to withdraw any Service Fees. Your funds are held at a bank account in your name at SynapsePay's partner Triumph Bank and are FDIC insured up to $250,000. Fund transfers are done electronically and may occur immediately after being authorized (or when a User because in default of a contribution that is due). In order to become a User and participate in Groups, you understand and agree that Esusu reserves the right, in its sole discretion, to obtain a pre-authorization of your banking account in order to verify your account and relevant account balance. Please note that Esusu cannot control any fees that may be charged to a User by his or her bank related to transfers or otherwise, and Esusu disclaims all liability in this regard. Currently, all bank communications and transfers are stored at&nbsp;
                      <a href="https://www.synapsepay.com/">
                        Synapsepay.com
                      </a>
                      &nbsp;using application level Advanced Encryption Standard (AES) 128-bit encryption over secure HTTPS connections. Esusu&rsquo;s internal servers are unable to view or obtain plaintext bank account numbers.
                    </Paragraph><br />
                    <Paragraph color="#000" fontSize="1em">
                      You authorize Esusu to make deposits or withdrawals for any transaction in your Groups from your linked bank account, either directly by Esusu or indirectly, via a third party online payment processor or by one of the payment methods described on the Service. You also authorize Esusu to deduce any Service Fees. If you are directed to Esusu&rsquo;s third party payment processor, you may be subject to terms and conditions governing use of that third party&rsquo;s service and that third party&rsquo;s personal information collection practices. Please review such terms and conditions and privacy policy before using the Service.
                    </Paragraph><br />
                    <Subheading color="#4a4a4a" fontSize="1.25em">
                      Taxes
                    </Subheading>
                    <Paragraph color="#000" fontSize="1em">
                      You understand and agree that you are solely responsible for determining your applicable tax reporting requirements in consultation with your tax advisors. Esusu cannot and does not offer Tax-related advice to any User. &ldquo;Tax&rdquo; or &ldquo;Taxes&rdquo; mean any sales taxes, value added taxes (VAT), goods and Service taxes (GST) and other similar municipal, provincial, state and federal indirect or other withholding and personal or corporate income taxes.
                    </Paragraph><br />
                    <Subheading color="#4a4a4a" fontSize="1.25em">
                      Eligibility; Account Information
                    </Subheading>
                    <Paragraph color="#000" fontSize="1em">
                      The Service is intended solely for persons who are 18 or older and you are legally able to enter into a contract. By accessing or using the Service you represent and warrant that (i) you agree to be bound by these Terms and (ii) that you are not legally prohibited from receiving or using the Service under the laws of the country in which you access or use the Service.
                    </Paragraph><br />
                    <Paragraph color="#000" fontSize="1em">
                      You agree to provide accurate, current and complete information during the registration process and to update such information to keep it accurate, current and complete. Esusu reserves the right to suspend or terminate your account and your access to the Service if any information provided during the registration process or thereafter proves to be inaccurate, not current, or incomplete. You are responsible for safeguarding your password. You agree that you will not disclose your password to any third party. You will immediately notify Esusu of any unauthorized use of your User Account. Esusu assumes no responsibility for User Content, User account information, or for any User&rsquo;s compliance with any applicable laws, rules and regulations.
                    </Paragraph><br />
                    <Subheading color="#4a4a4a" fontSize="1.25em">
                      No Endorsement
                    </Subheading>
                    <Paragraph color="#000" fontSize="1em">
                      Esusu&rsquo;s role is solely to facilitate the availability of the Service and to provide support related thereto. Esusu does not provide and is not responsible for User Content or Groups. Esusu does not verify Users&rsquo; information, review or approve Groups, participate in Groups, or provide any promises, warranties or guarantees regarding Groups. You acknowledge that Esusu will not be liable for any loss or damage related to your participation in any Group. Esusu does not refer or endorse or recommend particular Users or Groups. You acknowledge and agree that you, if a Listener, are responsible for your own acts and omissions.
                    </Paragraph><br />
                    <BackToTop href="#top"><Subheading color="#60c091" fontSize="1em">Back to top</Subheading></BackToTop>
                  </TextWrapper>
                  <TextWrapper id="use">
                   <Subtitle fontSize="1.25em" color="#4A4A4A">User Affirmations, Conduct and Use
</Subtitle>
                   <Subtitle fontSize="1em" color="#60c091" light uppercase>Last Updated: June 1, 2017</Subtitle>
                    <Paragraph color="#000" fontSize="1em">
                      By submitting the User registration form, you represent, warrant and agree to the following:
                    </Paragraph><br />
                    <ul>
                      <li>
                        You are at least 18 years of age, are authorized to submit a User registration, and are authorized to sign your User registration form.
                      </li>
                      <li>
                        You are solely and fully liable for all Content, conduct, postings and transmissions that are made under your user name and password.
                      </li>
                      <li>
                        You either are the sole and exclusive owner of all User Content that you make available through the Service or you have all rights, licenses, consents and releases that are necessary to grant to Esusu the rights in such User Content, as contemplated under these Terms.
                      </li>
                      <li>
                        You are solely responsible for reviewing, evaluating, and participation in any Group.
                      </li>
                      <li>
                        Esusu is not involved in any transactions between Users or Groups.
                      </li>
                      <li>
                        You are solely responsible for compliance with any and all laws, rules, regulations, and tax obligations that may apply to your use of the Service and Content.
                      </li>
                      <li>
                        Neither your User Content, nor your posting, uploading, publication, submission or transmittal of the User Content or Esusu&rsquo;s use of the User Content (or any portion thereof) on, through or by means of the Service, will infringe, misappropriate or violate a third party&rsquo;s patent, copyright, trademark, trade secret, moral rights or other proprietary or intellectual property rights, or rights of publicity or privacy, or result in the violation of any applicable law or regulation.
                      </li>
                    </ul>
                    <Paragraph color="#000" fontSize="1em">
                      By using the Service, you represent, warrant and agree that you will not:
                    </Paragraph><br />
                    <ul>
                      <li>
                        violate any local, state, provincial, national, or other law or regulation, or any order of a court, including, without limitation, zoning restrictions and tax regulations.
                      </li>
                      <li>
                        use manual or automated software, devices, scripts robots, other means or processes to access, &ldquo;scrape&rdquo;, &ldquo;crawl&rdquo; or &ldquo;spider&rdquo; any web pages or other Service contained in the Service or Content.
                      </li>
                      <li>
                        use the Service for any commercial or other purposes that are not expressly permitted by these Terms.
                      </li>
                      <li>
                        copy, store or otherwise access any information contained on the Service or Content for purposes not expressly permitted by these Terms.
                      </li>
                      <li>
                        interfere with or damage the Service, including, without limitation, through the use of viruses, cancel bots, Trojan horses, harmful code, flood pings, denial-of-service attacks, packet or IP spoofing, forged routing or electronic mail address information or similar methods or technology;
                      </li>
                      <ul>
                        <li>
                          use the Service to transmit, distribute, post or submit any information concerning any other person or entity, including without limitation, photographs of others without their permission, personal contact information, or credit, debit, calling card or bank account numbers.
                        </li>
                        <li>
                          use the Service in connection with the distribution of unsolicited commercial email ("spam") or advertisements.
                        </li>
                        <li>
                          "stalk" or harass any other User of the Service or collect or store any personally identifiable information about any other User other than for purposes of using the Service at intended.
                        </li>
                        <li>
                          recruit or otherwise solicit any other User to join third party services or websites that are competitive to Esusu, without Esusu&rsquo;s prior written approval.
                        </li>
                        <li>
                          impersonate any person or entity, or falsify or otherwise misrepresent yourself or your affiliation with any person or entity.
                        </li>
                        <li>
                          use automated scripts to collect information or otherwise interact with the Service.
                        </li>
                        <li>
                          post, upload, publish, submit or transmit any Content that: (i) infringes, misappropriates or violates a third party&rsquo;s patent, copyright, trademark, trade secret, moral rights or other intellectual property rights, or rights of publicity or privacy; (ii) violates, or encourages any conduct that would violate, any applicable law or regulation or would give rise to civil liability; (iii) is fraudulent, false, misleading or deceptive; (iv) is defamatory, obscene, pornographic, vulgar or offensive; (v) promotes discrimination, bigotry, racism, hatred, harassment or harm against any individual or group; (vi) is violent or threatening or promotes violence or actions that are threatening to any other person; or (vii) promotes illegal or harmful activities or substances.
                        </li>
                        <li>
                          systematically retrieve data or other content from our Service to create or compile, directly or indirectly, in single or multiple downloads, a collection, compilation, database, directory or the like, whether by manual methods, through the use of bots, crawlers, or spiders, or otherwise.
                        </li>
                        <li>
                          use, display, mirror or frame the Service, Esusu&rsquo;s name, any Esusu trademarks, logos or other proprietary information, or the layout and design of any page or form contained on a page, without Esusu&rsquo;s express written consent.
                        </li>
                        <li>
                          access, tamper with, or use non-public areas of the Service, Esusu&rsquo;s computer systems, or the technical delivery systems of the Service or any third-party provider system.
                        </li>
                        <li>
                          attempt to probe, scan, or test the vulnerability of any Esusu system or network or breach any security or authentication measures.
                        </li>
                        <li>
                          avoid, bypass, remove, deactivate, impair, descramble, or otherwise circumvent any technological measure implemented by Esusu or any of Esusu&rsquo;s providers or any other third party (including another user) to protect the Service or Collective Content.
                        </li>
                        <li>
                          forge any TCP/IP packet header or any part of the header information in any email or newsgroup posting, or in any way use the Service or Collective Content to send altered, deceptive or false source-identifying information.
                        </li>
                        <li>
                          attempt to decipher, decompile, disassemble or reverse engineer any of the software used to provide the Service or Collective Content.
                        </li>
                        <li>
                          advocate, encourage, or assist any third party in doing any of the foregoing.
                        </li>
                      </ul>
                    </ul>
                    <Paragraph color="#000" fontSize="1em">
                      Esusu has the right to investigate and prosecute violations of any of the above to the fullest extent of the law. Esusu may involve and cooperate with law enforcement authorities in prosecuting Users who violate these Terms. You acknowledge that Esusu has no obligation to monitor your access to or use of the Service or Content or to review or edit any User Content, but has the right to do so for the purpose of operating the Service, to ensure your compliance with these Terms, or to comply with applicable law or the order or requirement of a court, administrative agency or other governmental body.
                    </Paragraph><br />
                    <Subheading color="#4a4a4a" fontSize="1.25em">
                      Ownership
                    </Subheading>
                    <Paragraph color="#000" fontSize="1em">
                      The Service is licensed and not sold. The Service and Collective Content are protected by copyright, trademark, and other laws of the United States and foreign countries. You acknowledge and agree that the Service and Collective Content, including all associated intellectual property rights, are the exclusive property of Esusu and its licensors. You will not remove, alter or obscure any copyright, trademark, service mark or other proprietary rights notices incorporated in or accompanying the Service or Collective Content. All trademarks, service marks, logos, trade names and any other proprietary designations of Esusu used herein are trademarks or registered trademarks of Esusu. Any other trademarks, service marks, logos, trade names and any other proprietary designations are the trademarks or registered trademarks of their respective parties.
                    </Paragraph><br />
                    <BackToTop href="#top"><Subheading color="#60c091" fontSize="1em">Back to top</Subheading></BackToTop>
                  </TextWrapper>
                  <TextWrapper id="service">
                   <Subtitle fontSize="1.25em" color="#4A4A4A">License to the Service
</Subtitle>
                   <Subtitle fontSize="1em" color="#60c091" light uppercase>Last Updated: June 1, 2017</Subtitle>
                    <Paragraph color="#000" fontSize="1em">
                      Subject to your compliance with these Terms, Esusu grants you a limited, personal, non-exclusive, revocable, non-transferable license, to (i) electronically access and use the Service solely for your personal and non-commercial purposes and (ii) access and view any User Content to which you are permitted access, solely for your personal and non-commercial purposes. You have no right to sublicense the license rights granted in this section.
                    </Paragraph><br />
                    <Paragraph color="#000" fontSize="1em">
                      You will not use, copy, adapt, modify, prepare derivative works based upon, distribute, license, sell, transfer, publicly display, publicly perform, transmit, broadcast or otherwise exploit the Service or Collective Content, except as expressly permitted in these Terms. No licenses or rights are granted to you by implication or otherwise under any intellectual property rights owned or controlled by Esusu or its licensors, except for the licenses and rights expressly granted in these Terms.
                    </Paragraph><br />
                    <Subheading color="#4a4a4a" fontSize="1.25em">
                      License Grant to Esusu
                    </Subheading>
                    <Paragraph color="#000" fontSize="1em">
                      By making available any User Content on or through the Service, you hereby grant to Esusu a worldwide, irrevocable, perpetual, non-exclusive, transferable, royalty-free license, with the right to create derivative works, sublicense, use, edit, view, copy, adapt, modify, distribute, license, sell, host, market, transfer, publicly display, publicly perform, transmit, stream, broadcast, access, and otherwise fully exploit such User Content on, through, or by means of the Service as currently exist or may be developed in the future. Esusu does not claim any ownership rights in any such User Content and nothing in these Terms will be deemed to restrict any rights that you may have to use and exploit any such User Content.
                    </Paragraph><br />
                    <Subheading color="#4a4a4a" fontSize="1.25em">
                      Links
                    </Subheading>
                    <Paragraph color="#000" fontSize="1em">
                      The Service may contain links to third-party websites or resources. You acknowledge and agree that Esusu is not responsible or liable for: (i) the availability or accuracy of such websites or resources; or (ii) the Content, products, or Service on or available from such websites or resources. Links to such websites or resources do not imply any endorsement by Esusu of such websites or resources or the content, products, or Service available from such websites or resources. You acknowledge sole responsibility for and assume all risk arising from your use of any such websites or resources or the Content, products or Service on or available from such websites or resources.
                    </Paragraph><br />
                    <Subheading color="#4a4a4a" fontSize="1.25em">
                      Advertisements
                    </Subheading>
                    <Paragraph color="#000" fontSize="1em">
                      Esusu may include advertisements on its own behalf or paid advertisements on behalf of interested companies and/or individuals on the Service. By clicking on the advertisements, the User may be shifted to a Web site of the advertiser or receive other messages, information, or offers from the advertiser. Users acknowledge and agree that Esusu is not liable for the privacy practices of advertisers or the content of their Web sites, information, messages or offers. Users are wholly liable for all communications with advertisers and for all transactions subsequently executed.
                    </Paragraph><br />
                    <Subheading color="#4a4a4a" fontSize="1.25em">
                      Digital Millennium Copyright Act
                    </Subheading>
                    <Paragraph color="#000" fontSize="1em">
                      If you are a copyright owner or an agent thereof and believe that any Content infringes upon your copyrights, you may submit a notification pursuant to the Digital Millennium Copyright Act ("DMCA") by providing our Copyright Agent with the following information in writing (see 17 U.S.C &sect; 512(c)(3) for further detail):
                    </Paragraph><br />
                    <ul>
                      <li>
                        A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;
                      </li>
                      <li>
                        Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single website location are covered by a single notification, a representative list of such works at that website;
                      </li>
                      <li>
                        Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled and information reasonably sufficient to permit the service provider to locate the material;
                      </li>
                      <li>
                        Information reasonably sufficient to permit the service provider to contact you, such as an address, telephone number, and, if available, an electronic mail;
                      </li>
                      <li>
                        A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and
                      </li>
                      <li>
                        A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
                      </li>
                    </ul>
                    <Paragraph color="#000" fontSize="1em">
                      Esusu's designated Copyright Agent to receive notifications of claimed infringement is:
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    Esusu, LLC
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    PO Box 2946
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    Merrifield, VA 22116
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    USA
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    You acknowledge that if you fail to comply with all of these requirements, your DMCA notice may not be valid.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    Counter-Notice. If you believe that your Content that was removed (or to which access was disabled) is not infringing, or that you have the authorization from the copyright owner, the copyright owner's agent, or pursuant to the law, to post and use the material in your User Submission, you may send a counter-notice containing the following information to the Copyright Agent:
                    </Paragraph><br />
                    <ul>
                      <li>
                        Your physical or electronic signature;
                      </li>
                      <li>
                        Identification of the User Submission that has been removed or to which access has been disabled and the location at which the User Submission appeared before it was removed or disabled;
                      </li>
                      <li>
                        A statement that you have a good faith belief that the User Submission was removed or disabled as a result of mistake or a misidentification of the User Submission; and
                      </li>
                      <li>
                        Your name, address, telephone number, and e-mail address, a statement that you consent to the jurisdiction of the federal court in San Francisco, California, and a statement that you will accept service of process from the person who provided notification of the alleged infringement.
                      </li>
                    </ul>
                    <Paragraph color="#000" fontSize="1em">
                      If a counter-notice is received by the Copyright Agent, Esusu may send a copy of the counter-notice to the original complaining party informing that person that it may replace the removed Content or cease disabling it in 10 business days. Unless the copyright owner files an action seeking a court order against the Content provider, the removed Content may be replaced, or access to it restored, in 10 to 14 business days or more after receipt of the counter-notice, at Esusu's sole discretion.
                  </Paragraph><br />
                  <Subheading color="#4a4a4a" fontSize="1.25em">
                    Termination and User Account Deactivation
                  </Subheading>
                  <Paragraph color="#000" fontSize="1em">
                    We may, in our discretion and without liability to you, with or without cause, with or without prior notice, and at any time: (a) terminate these Terms or your access to our Service, and (b) deactivate or cancel your User account. Upon termination we will promptly pay you any amounts we reasonably determine we owe you in our discretion, which we are legally obligated to pay you. In the event Esusu terminates these Terms, or your access to our Service or deactivates or cancels your User account you will remain liable for all amounts due hereunder. You may cancel your User account at any time by contacting Esusu. Please note that if your User account is cancelled, we do not have an obligation to delete or return to you any Content you have posted to the Service, including, but not limited to, any reviews or feedback.
                  </Paragraph><br />
                  <Subheading color="#4a4a4a" fontSize="1.25em">
                    Disclaimers
                  </Subheading>
                  <Paragraph color="#000" fontSize="1em">
                    IF YOU CHOOSE TO USE THE SERVICE, YOU DO SO AT YOUR SOLE RISK. YOU ACKNOWLEDGE AND AGREE THAT ESUSU DOES NOT REVIEW, ENDORSE, RECOMMEND, VERIFY, EVALUATE, WARRANT OR GUARANTEE ANY STATEMENT, OPINION, RESPONSE, ADVICE, PREDICTION, RECOMMENDATION, INFORMATION OR CONTENT PROVIDED BY ANY USER. NOTHING CONTAINED IN THESE TERMS SHALL BE CONSIDERED AS A REFERRAL, ENDORSEMENT, RECOMMENDATION, VERIFICATION, WARRANTY OR GUARANTEE WITH RESPECT TO (A) ANY USER; (B) ANY GROUP; OR (C) THE VALIDITY, ACCURACY, AVAILABILITY, COMPLETENESS, SAFETY, LEGALITY, QUALITY OR APPLICABILITY OF ANY GROUP, CONTENT OR ANYTHING OTHERWISE CONTAINED IN OR MADE AVAILABLE ON THE SERVICE OR ANY OTHER FORUM.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    THE SERVICE AND CONTENT ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS, WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED. WITHOUT LIMITING THE FOREGOING, ESUSU EXPLICITLY DISCLAIMS ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT OR NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE. ESUSU MAKES NO WARRANTY THAT THE SERVICE OR COLLECTIVE CONTENT WILL MEET YOUR REQUIREMENTS OR BE AVAILABLE ON AN UNINTERRUPTED, SECURE, OR ERROR-FREE BASIS. ESUSU MAKES NO WARRANTY REGARDING THE QUALITY OF THE SERVICE OR COLLECTIVE CONTENT, OR THE ACCURACY, TIMELINESS, TRUTHFULNESS, COMPLETENESS OR RELIABILITY OF ANY COLLECTIVE CONTENT OBTAINED THROUGH THE SERVICE.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    YOU ARE SOLELY RESPONSIBLE FOR ALL OF YOUR COMMUNICATIONS AND INTERACTIONS WITH OTHER USERS AND WITH OTHER PERSONS WITH WHOM YOU INTERACT OR COMMUNICATE WITH AS A RESULT OF YOUR USE OF THE SERVICE. YOU AGREE TO TAKE REASONABLE PRECAUTIONS IN ALL COMMUNICATIONS AND INTERACTIONS WITH OTHER USERS AND WITH OTHER PERSONS WITH WHOM YOU COMMUNICATE OR INTERACT AS A RESULT OF YOUR USE OF THE SERVICE. YOU ACKNOWLEDGE AND AGREE TO INDEMNIFY AND HOLD ESUSU HARMLESS IN CONNECTION WITH ANY CLAIM AND ANY DAMAGES OR EXPENSES ARISING FROM YOUR USE OF THE SERVICE.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    ESUSU WILL NOT BE LIABLE FOR ENFORCING ANY AGREEMENT THAT WAS MADE BETWEEN USERS PARTICIPATING IN A GROUP. USERS WILL BE SOLELY RESPONSIBLE FOR ANY GROUPS JOINED OR AGREEMENTS MADE WITH ANOTHER USER.
                  </Paragraph><br />
                  <Subheading color="#4a4a4a" fontSize="1.25em">
                    Limitation of Liability
                  </Subheading>
                  <Paragraph color="#000" fontSize="1em">
                    YOU ACKNOWLEDGE AND AGREE THAT, TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE ENTIRE RISK ARISING OUT OF YOUR ACCESS TO AND USE OF THE SERVICE, CONTENT, OR GROUP REMAINS WITH YOU. NEITHER ESUSU NOR ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING OR DELIVERING THE SERVICE OR CONTENT WILL BE LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA OR LOSS OF GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF SUBSTITUTE PRODUCTS OR SERVICE, OR FOR ANY DAMAGES FOR PERSONAL OR BODILY INJURY OR EMOTIONAL DISTRESS ARISING OUT OF OR IN CONNECTION WITH THESE TERMS, FROM THE USE OF OR INABILITY TO USE THE SERVICE OR COLLECTIVE CONTENT, FROM PARTICIPATION IN ANY GROUP, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT ESUSU HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    IN NO EVENT WILL ESUSU&rsquo;S AGGREGATE LIABILITY ARISING OUT OF OR IN CONNECTION WITH THESE TERMS AND YOUR USE OF THE SERVICE, INCLUDING, BUT NOT LIMITED TO, FROM A GROUP, ANY CONTENT, OR ANY INTERACTIONS WITH ANY OTHER USERS, EXCEED THE AMOUNTS YOU HAVE PAID TO ESUSU AS SERVICE FEES IN THE TWELVE (12) MONTH PERIOD PRIOR TO THE EVENT GIVING RISE TO THE LIABILITY, OR ONE HUNDRED DOLLARS ($100) IF NO SUCH PAYMENTS HAVE BEEN MADE, AS APPLICABLE. THE LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN ESUSU AND YOU. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU.
                  </Paragraph><br />
                  <Subheading color="#4a4a4a" fontSize="1.25em">
                    Indemnification
                  </Subheading>
                  <Paragraph color="#000" fontSize="1em">
                    You agree to release, defend, indemnify, and hold ESUSU and its affiliates and subsidiaries, and their officers, directors, employees and agents, harmless from and against any claims, liabilities, damages, losses, and expenses, including, without limitation, reasonable legal fees, arising out of or in any way connected with (a) your access to or use of the Service, Group, or Content; (b) your violation of these Terms; (c) your User Content; (d) your (i) interaction with any User, (ii) reliance on any information exchanged via the Service, or (iii) creation of a Profile; (e) your violation of any third party right, including without limitation any copyright, property, or privacy right; or (f) any claim that you or your Content caused damage to a third party. ESUSU shall have the right to control all defense and settlement activities.
                  </Paragraph><br />
                  <Subheading color="#4a4a4a" fontSize="1.25em">
                    Assignment
                  </Subheading>
                  <Paragraph color="#000" fontSize="1em">
                    You may not assign or transfer these Terms, by operation of law or otherwise, without ESUSU&rsquo;s prior written consent. Any attempt by you to assign or transfer these Terms, without such consent, will be null and of no effect. ESUSU may assign or transfer these Terms, at its sole discretion, without restriction. Subject to the foregoing, these Terms will bind and inure to the benefit of the parties, their successors and permitted assigns.
                  </Paragraph><br />
                  <Subheading color="#4a4a4a" fontSize="1.25em">
                    Notices
                  </Subheading>
                  <Paragraph color="#000" fontSize="1em">
                    Unless otherwise specified herein, any notices or other communications permitted or required hereunder, including those regarding modifications to these Terms, will be in writing and given by ESUSU (i) via email (in each case to the email address that you provide) or (ii) by posting to the Site or via the Application. For notices made by e-mail, the date of receipt will be deemed the date on which such notice is transmitted.
                  </Paragraph><br />
                  <Subheading color="#4a4a4a" fontSize="1.25em">
                    Controlling Law and Jurisdiction
                  </Subheading>
                  <Paragraph color="#000" fontSize="1em">
                    You agree that (i) the Service shall be deemed solely based in New York, and (ii) the Service shall be deemed a passive smartphone application that does not give rise to personal jurisdiction over ESUSU, either specific or general, in jurisdictions other than New York. These Terms shall be governed by the internal substantive laws of the State of New York, without respect to its conflict of laws principles. You and we agree to submit to the personal jurisdiction of a state court located in Wyoming for any actions for which the parties retain the right to seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation or violation of a party&rsquo;s copyrights, trademarks, trade secrets, patents, or other intellectual property rights, as set forth in the Dispute Resolution Provision below.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    YOU AND ESUSU AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THE SERVICE OR COLLECTIVE CONTENT MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY BARRED AND WAIVED.
                  </Paragraph><br />
                  <Subheading color="#4a4a4a" fontSize="1.25em">
                    Severability
                  </Subheading>
                  <Paragraph color="#000" fontSize="1em">
                    These Terms are intended to govern the agreement between Esusu and you to the extent permitted by all applicable laws, ordinances, rules, and regulations. If any provision of these Terms or the application thereof to any person or circumstances shall, for any reason or to any extent, be invalid or unenforceable, the remainder of these Terms and the application of such provision to other persons or circumstances shall not be affected thereby, but rather shall be enforced to the greatest extent permitted by law.
                  </Paragraph><br />
                    <BackToTop href="#top"><Subheading color="#60c091" fontSize="1em">Back to top</Subheading></BackToTop>
                  </TextWrapper>
                  <TextWrapper id="dispute">
                   <Subtitle fontSize="1.25em" color="#4A4A4A">Dispute Resolution Provision
</Subtitle>
                   <Subtitle fontSize="1em" color="#60c091" light uppercase>Last Updated: June 1, 2017</Subtitle>
                  <Paragraph color="#000" fontSize="1em">
                    You and Esusu agree that any dispute, claim or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation or validity thereof, or to the use of the Service (collectively, &ldquo;Disputes&rdquo;) will be settled by binding arbitration; except that each party retains the right to seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation or violation of a party&rsquo;s copyrights, trademarks, trade secrets, patents, or other intellectual property rights.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    You acknowledge and agree that you and Esusu are each waiving the right to a trial by jury or to participate as a plaintiff or class User in any purported class action or representative proceeding. Further, unless both you and Esusu otherwise agree in writing, the arbitrator may not consolidate more than one person&rsquo;s claims, and may not otherwise preside over any form of any class or representative proceeding. If this specific paragraph is held unenforceable, then the entirety of this &ldquo;Dispute Resolution&rdquo; section will be deemed void. Except as provided in the preceding sentence, this &ldquo;Dispute Resolution&rdquo; section will survive any termination of these Terms.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    Arbitration Rules and Governing Law. The arbitration will be administered by the American Arbitration Association (&ldquo;AAA&rdquo;) in accordance with the Commercial Arbitration Rules and the Supplementary Procedures for Consumer Related Disputes (the &ldquo;AAA Rules&rdquo;) then in effect, except as modified by this &ldquo;Dispute Resolution&rdquo; section. (The AAA Rules are available at www.adr.org/arb_med or by calling the AAA at 1-800-778-7879.) The Federal Arbitration Act will govern the interpretation and enforcement of this section.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    Arbitration Process. A party who desires to initiate arbitration must provide the other party with a written Demand for Arbitration as specified in the AAA Rules. (The AAA provides a form Demand for Arbitration at www.adr.org/si.asp?id=3477 and a separate form for California residents atwww.adr.org/si.asp?id=3485.) The arbitrator will be either a retired judge or an attorney licensed to practice law in the state of Wyoming and will be selected by the parties from the AAA&rsquo;s roster of consumer dispute arbitrators. If the parties are unable to agree upon an arbitrator within seven (7) days of delivery of the Demand for Arbitration, then the AAA will appoint the arbitrator in accordance with the AAA Rules.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    Arbitration Location and Procedure. Unless you and Esusu otherwise agree, the arbitration will be conducted in the county where you reside. If your claim does not exceed $5,000, then the arbitration will be conducted solely on the basis of documents you and Esusu submit to the arbitrator, unless you request a hearing or the arbitrator determines that a hearing is necessary. If your claim exceeds $5,000, your right to a hearing will be determined by the AAA Rules. Subject to the AAA Rules, the arbitrator will have the discretion to direct a reasonable exchange of information by the parties, consistent with the expedited nature of the arbitration.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    Arbitrator&rsquo;s Decision. The arbitrator will render an award within the time frame specified in the AAA Rules. The arbitrator&rsquo;s decision will include the essential findings and conclusions upon which the arbitrator based the award. Judgment on the arbitration award may be entered in any court having jurisdiction thereof. The arbitrator&rsquo;s award damages must be consistent with the terms of the &ldquo;Limitation of Liability&rdquo; section above as to the types and the amounts of damages for which a party may be held liable. The arbitrator may award declaratory or injunctive relief only in favor of the claimant and only to the extent necessary to provide relief warranted by the claimant&rsquo;s individual claim. If you prevail in arbitration you will be entitled to an award of attorneys&rsquo; fees and expenses, to the extent provided under applicable law.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    Fees. Your responsibility to pay any AAA filing, administrative and arbitrator fees will be solely as set forth in the AAA Rules. However, if your claim for damages does not exceed $5,000, Esusu will pay all such fees unless the arbitrator finds that either the substance of your claim or the relief sought in your Demand for Arbitration was frivolous or was brought for an improper purpose (as measured by the standards set forth in Federal Rule of Civil Procedure 11(b)).
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    No Class Action. YOU AND ESUSU AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. Further, unless both you and we agree otherwise, the arbitrator may not consolidate more than one person&rsquo;s claims, and may not otherwise preside over any form of a representative or class proceeding.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    Changes. Notwithstanding the provisions of the &ldquo;Modification&rdquo; section above, if Esusu amends this &ldquo;Dispute Resolution&rdquo; section after the date you first accepted these Terms (or accepted any subsequent changes to these Terms) you will be notified in accordance with these Terms. You may reject any such change by sending us written notice (including by email to&nbsp;support@esusu.org) within 30 days of the date such change became effective, as indicated in the &ldquo;Last Updated Date&rdquo; above or in the date of Esusu&rsquo;s email to you notifying you of such change. By rejecting any change, you are agreeing that you will arbitrate any Dispute between you and Esusu in accordance with the provisions of this &ldquo;Dispute Resolution&rdquo; section as of the date you first accepted these Terms (or accepted any subsequent changes to these Terms).
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    Enforceability. If the &ldquo;No Class Action&rdquo; section of this Dispute Resolution Provision is found to be unenforceable, or if the entire Dispute Resolution Provision is found to be unenforceable, then the entirety of the Dispute Resolution Provision will be null and void and, in that case, the parties agree that the exclusive jurisdiction and venue described above will govern any action arising out of or related to these Terms.
                  </Paragraph><br />
                  <Subheading color="#4a4a4a" fontSize="1.25em">
                    International Users
                  </Subheading>
                  <Paragraph color="#000" fontSize="1em">
                    Esusu makes no claim that the Service, Groups, or Content are appropriate or may be accessed, used or downloaded outside the United States. If you access the Service, Groups or Content from a location outside the United States, you do so at your own risk and are responsible for compliance with the laws of your jurisdiction regarding online conduct and acceptable content.
                  </Paragraph><br />
                  <Subheading color="#4a4a4a" fontSize="1.25em">
                    Feedback and Reporting Misconduct
                  </Subheading>
                  <Paragraph color="#000" fontSize="1em">
                    We welcome and encourage you to provide feedback, comments and suggestions (collectively &ldquo;Feedback&rdquo;) for improvements to the Site, Application and Service. You may submit feedback by emailing us at&nbsp;support@esusu.org. You acknowledge and agree that all Feedback will be the sole and exclusive property of Esusu and you hereby irrevocably assign to Esusu and agree to irrevocably assign to Esusu all of your right, title, and interest in and to all Feedback, including without limitation all worldwide patent, copyright, trade secret, moral and other proprietary or intellectual property rights therein. At Esusu&rsquo;s request and expense, you will execute documents and take such further acts as Esusu may reasonably request to assist Esusu to acquire, perfect, and maintain its intellectual property rights and other legal protections for the Feedback.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    If you feel any User is acting or has acted inappropriately, including but not limited to, anyone who (i) engages in offensive, violent or sexually inappropriate behavior, (ii) you suspect of fraud, or (iii) engages in any other disturbing conduct, you agree to immediately report such person to the appropriate authorities and to Esusu.
                  </Paragraph><br />
                  <Subheading color="#4a4a4a" fontSize="1.25em">
                    General
                  </Subheading>
                  <Paragraph color="#000" fontSize="1em">
                    The failure of Esusu to enforce any right or provision of these Terms will not constitute a waiver of future enforcement of that right or provision. The waiver of any such right or provision will be effective only if in writing and signed by a duly authorized representative of Esusu. Except as expressly set forth in these Terms, the exercise by either party of any of its remedies under these Terms will be without prejudice to its other remedies under these Terms or otherwise. If for any reason an arbitrator or a court of competent jurisdiction finds any provision of these Terms invalid or unenforceable, that provision will be enforced to the maximum extent permissible and the other provisions of these Terms will remain in full force and effect.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    Certain parts of the Service may have different or additional terms and conditions posted or may require you to agree with and accept additional terms and conditions. If there is a conflict between these Terms and the terms and conditions posted for a specific part of the Service, the latter terms and conditions will take precedence.
                  </Paragraph><br />
                  <Subheading color="#4a4a4a" fontSize="1.25em">
                    Notice to California Residents.
                  </Subheading>
                  <Paragraph color="#000" fontSize="1em">
                    If you are a California resident, under California Civil Code &sect; 1789.3, you may contact the Complaint Assistance Unit of the Division of Consumer Service of the California Department of Consumer Affairs in writing at 1625 N. Market Blvd., Suite S-202, Sacramento, California 95834, or by telephone at (800) 952-5210 in order to resolve a complaint regarding the Service or to receive further information regarding use of the Service.
                  </Paragraph><br />
                  <Subheading color="#4a4a4a" fontSize="1.25em">
                    Modification
                  </Subheading>
                  <Paragraph color="#000" fontSize="1em">
                    Esusu reserves the right, at its sole discretion, to modify or discontinue, temporarily or permanently, the Service or to modify these Terms, including any Service Fees, at any time and without prior notice. If we modify these Terms, we will post the modification on the Site or via the Application; however, we reserve the right to make any such changes effective immediately to maintain the security of our Service of to comply with any laws or regulations. We will update the &ldquo;Last Updated Date&rdquo; at the top of these Terms.
                  </Paragraph><br />
                  <Paragraph color="#000" fontSize="1em">
                    Modifications to these Terms shall automatically be effective upon posting; provided, however, that material changes to the Terms will be effective as to an existing User thirty (30) days after notice to the User is provided via email from&nbsp;support@esusu.org&nbsp;to your email address on file with Esusu. You agree to keep your email address on file with Esusu up-to-date. By continuing to access or use the Service after we have posted a modification or have provided you with notice of a modification, you are indicating that you agree to be bound by the modified Terms. If the modified Terms are not acceptable to you, your only recourse is to cease using the Service.
                  </Paragraph><br />
                <Subheading color="#4a4a4a" fontSize="1.25em">
                  Entire Agreement
                </Subheading>
                  <Paragraph color="#000" fontSize="1em">
                    These Terms constitute the entire and exclusive understanding and agreement between Esusu and you regarding the Service, Collective Content and any Calls or Profiles made via the Service, and these Terms supersede and replace any and all prior oral or written understandings or agreements between Esusu and you regarding the same.
                  </Paragraph><br />
                    <BackToTop href="#top"><Subheading color="#60c091" fontSize="1em">Back to top</Subheading></BackToTop>
                  </TextWrapper>
                  <TextWrapper>
                    <Subtitle fontSize="1.25em" color="#60c091">Disclaimer:
                    </Subtitle>
                    <Paragraph color="#000" fontSize="1em">
                      The original, legally binding version of this document is written in English. If this document is translated into other languages, there may be discrepancies between the English version and a translated version. If so, the English version supersedes the translated version.</Paragraph>

                </TextWrapper>
              </Box>
            </Flex>
          </Block>
        </Section>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`

`

const TextWrapper = styled.article`
  background: #F7F7F7;
  border-radius: 4px;
  padding: 1.3em;
  margin: 2em auto;
`

const SectionLink = styled.a`
  font-family: Avenir;
  font-size: 1em;
  color: #60C091;
  letter-spacing: 1.5;
  font-weight: 200;
  display: inline-block;
  margin-right: 20px;
  text-decoration: none;
  line-height: 2;
  &:hover {
    border-bottom: 1px solid #60C091;
  }
`

const TopLink = styled(SectionLink)`
   border-bottom: 1px solid #60C091;
`

const BackToTop = styled.a`
  text-decoration: none;
`
