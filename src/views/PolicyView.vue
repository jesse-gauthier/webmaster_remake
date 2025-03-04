<template>
  <div class="bg-neutral-cream min-h-screen">
    <!-- Header section with title -->
    <div class="bg-primary-600 py-12">
      <div class="container-site">
        <h1 class="text-neutral-50 mb-2">Legal Policies</h1>
        <p class="text-primary-100 text-lg mb-0">Last Updated: March 4, 2025</p>
      </div>
    </div>

    <!-- Main content -->
    <div class="container-site section-padding">
      <div class="max-w-content mx-auto">
        <!-- Navigation Tabs -->
        <div class="bg-white rounded-t-lg shadow-sm p-2 flex border-b border-primary-200">
          <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id" :class="[
            'py-3 px-5 font-heading font-medium text-base rounded-md transition-all duration-200 focus:outline-none',
            activeTab === tab.id
              ? 'bg-primary-600 text-white shadow-sm'
              : 'text-primary-600 hover:bg-primary-50'
          ]">
            {{ tab.name }}
          </button>
        </div>

        <!-- Content Section -->
        <div class="bg-white rounded-b-lg shadow-card p-8">
          <!-- Privacy Policy -->
          <div v-show="activeTab === 'privacy'" class="animate-fade-in">
            <h2>Privacy Policy</h2>

            <!-- Introduction -->
            <section class="mb-8">
              <p>
                Thank you for choosing to be part of our community at [Company Name] ("Company", "we", "us", or "our").
                We are committed to protecting your personal information and your right to privacy.
                If you have any questions or concerns about our policy, or our practices with regards to your personal
                information,
                please contact us at [contact email].
              </p>
              <p>
                This Privacy Policy applies to all information collected through our website,
                mobile application, and/or any related services, sales, marketing or events
                (we refer to them collectively in this Privacy Policy as the "Services").
              </p>
              <p class="font-bold">
                Please read this privacy policy carefully as it will help you make informed decisions
                about sharing your personal information with us.
              </p>
            </section>

            <!-- Information We Collect -->
            <section class="mb-8">
              <h3>1. What Information Do We Collect?</h3>

              <h4 class="mt-4">Personal Information You Disclose to Us</h4>
              <p>
                We collect personal information that you voluntarily provide to us when registering for our Services,
                expressing an interest in obtaining information about us or our products and services, when
                participating
                in activities on the Services, or otherwise contacting us.
              </p>
              <p>
                The personal information that we collect depends on the context of your interactions with us and the
                Services,
                the choices you make, and the products and features you use. The personal information we collect can
                include
                the following:
              </p>
              <ul class="list-disc pl-6 mb-4">
                <li>Name and contact data (such as email address, phone number, etc.)</li>
                <li>Credentials (such as passwords and security questions)</li>
                <li>Payment data (such as credit card information)</li>
                <li>Location data (such as IP address)</li>
                <li>Usage data (such as how you interact with our Services)</li>
              </ul>

              <h4>Information Automatically Collected</h4>
              <p>
                We automatically collect certain information when you visit, use, or navigate the Services.
                This information does not reveal your specific identity but may include device and usage information,
                such as your IP address, browser and device characteristics, operating system, language preferences,
                referring URLs, device name, country, location, information about how and when you use our Services,
                and other technical information.
              </p>
            </section>

            <!-- How We Use Information -->
            <section class="mb-8">
              <h3>2. How Do We Use Your Information?</h3>
              <p>
                We use personal information collected via our Services for a variety of business purposes described
                below.
                We process your personal information for these purposes in reliance on our legitimate business
                interests,
                in order to enter into or perform a contract with you, with your consent, and/or for compliance with our
                legal obligations.
              </p>
              <ul class="list-disc pl-6">
                <li>To facilitate account creation and login process</li>
                <li>To deliver and facilitate delivery of services to the user</li>
                <li>To respond to user inquiries and offer support</li>
                <li>To send administrative information (such as changes to our terms, conditions, and policies)</li>
                <li>To personalize user experience and to allow us to deliver the type of content and product offerings
                  that most interests you</li>
                <li>To send you marketing and promotional communications (if you have opted in)</li>
                <li>To protect our Services and for fraud prevention</li>
              </ul>
            </section>

            <!-- Information Sharing -->
            <section class="mb-8">
              <h3>3. Will Your Information Be Shared With Anyone?</h3>
              <p>
                We only share information with your consent, to comply with laws, to provide you with services,
                to protect your rights, or to fulfill business obligations. We may process or share data based on the
                following legal basis:
              </p>
              <ul class="list-disc pl-6">
                <li>With service providers who help us deliver our Services</li>
                <li>With business partners with whom we jointly offer products or services</li>
                <li>With affiliated companies</li>
                <li>When required by law or to respond to legal process</li>
                <li>To protect our rights and property, and the safety of our users</li>
              </ul>
            </section>

            <!-- Additional Sections -->
            <section class="mb-8">
              <h3>4. How Long Do We Keep Your Information?</h3>
              <p>
                We will only keep your personal information for as long as it is necessary for the purposes set out in
                this Privacy Policy,
                unless a longer retention period is required or permitted by law. When we have no ongoing legitimate
                business need to process
                your personal information, we will either delete or anonymize it.
              </p>
            </section>

            <section class="mb-8">
              <h3>5. How Do We Keep Your Information Safe?</h3>
              <p>
                We have implemented appropriate technical and organizational security measures designed to protect the
                security of any personal
                information we process. However, please also remember that we cannot guarantee that the internet itself
                is 100% secure.
              </p>
            </section>

            <section class="mb-8">
              <h3>6. What Are Your Privacy Rights?</h3>
              <p>
                In some regions, such as the European Economic Area, you have rights that allow you greater access to
                and control over your
                personal information. You may review, change, or terminate your account at any time. You may have the
                right to:
              </p>
              <ul class="list-disc pl-6">
                <li>Access your personal data</li>
                <li>Correct inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to the processing of your personal data</li>
                <li>Request the restriction of processing of your personal data</li>
                <li>Request the transfer of your personal data</li>
                <li>Withdraw your consent</li>
              </ul>
            </section>

            <section class="mb-8">
              <h3>7. Policy Updates</h3>
              <p>
                We may update this privacy policy from time to time. The updated version will be indicated by an updated
                "Revised" date and
                the updated version will be effective as soon as it is accessible. We encourage you to review this
                privacy policy frequently
                to be informed of how we are protecting your information.
              </p>
            </section>

            <section>
              <h3>8. Contact Us</h3>
              <p>
                If you have questions or comments about this policy, you may email us at [contact email] or by post to:
              </p>

            </section>
          </div>

          <!-- Cookies Policy -->
          <div v-show="activeTab === 'cookies'" class="animate-fade-in">
            <h2>Cookies Policy</h2>

            <!-- Introduction -->
            <section class="mb-8">
              <p>
                This Cookies Policy explains what cookies are and how we use them. You should read this policy to
                understand
                what cookies are, how we use them, the types of cookies we use, the information we collect using cookies
                and
                how that information is used, and how to control your cookie preferences.
              </p>
              <p>
                Cookies are small text files that are used to store small pieces of information. They are stored on your
                device
                when the website is loaded on your browser. These cookies help us make the website function properly,
                make the
                website more secure, provide better user experience, and understand how the website performs and to
                analyze what works.
              </p>
            </section>

            <!-- How We Use Cookies -->
            <section class="mb-8">
              <h3>1. How We Use Cookies</h3>
              <p>
                Like most online services, our website uses cookies for a number of reasons, like protecting your data
                and account,
                improving our website's performance, remembering your preferences, and generally providing you with a
                better experience.
                We use cookies for the following purposes:
              </p>
              <ul class="list-disc pl-6">
                <li>Necessary cookies: These cookies are essential for the website to function properly.</li>
                <li>Functionality cookies: These cookies allow our website to remember choices you make and provide
                  enhanced features.</li>
                <li>Analytics cookies: These cookies collect information about how visitors use our website.</li>
                <li>Marketing cookies: These cookies track your online activity to help advertisers deliver more
                  relevant advertising.</li>
                <li>Preference cookies: These cookies enable the website to provide enhanced functionality based on your
                  preferences.</li>
              </ul>
            </section>

            <!-- Types of Cookies -->
            <section class="mb-8">
              <h3>2. Types of Cookies We Use</h3>

              <h4 class="mt-4">Session Cookies</h4>
              <p>
                Session cookies are temporary cookies that are used during the course of your visit to the website, and
                they expire
                when you close the web browser.
              </p>

              <h4 class="mt-4">Persistent Cookies</h4>
              <p>
                Persistent cookies are used to remember your preferences within our website and remain on your desktop
                or mobile device
                even after you close your browser or restart your computer.
              </p>

              <h4 class="mt-4">Third-Party Cookies</h4>
              <p>
                We may use third-party service providers to monitor and analyze the use of our website. These
                third-party service providers
                may use their own cookies to collect information about how you and others use our website.
              </p>
            </section>

            <!-- Your Cookie Choices -->
            <section class="mb-8">
              <h3>3. Your Cookie Choices and Control</h3>
              <p>
                You can manage your cookie preferences by changing your browser settings to block or notify you when
                cookies are being set.
                Please note that if you decide to disable cookies, some features of our website may not function
                properly.
              </p>
              <p>Most web browsers allow you to manage your cookie preferences. You can:</p>
              <ul class="list-disc pl-6">
                <li>Delete cookies from your browser</li>
                <li>Block cookies by activating the setting on your browser to refuse cookies</li>
                <li>Allow cookies from specific websites</li>
              </ul>
              <p>
                If you disable cookies, please note that some parts of our website may become inaccessible or not
                function properly.
              </p>
            </section>

            <!-- Cookie Updates -->
            <section>
              <h3>4. Updates to this Cookies Policy</h3>
              <p>
                We may update our Cookies Policy from time to time to reflect changes in technology, regulations, or our
                business practices.
                Any changes will become effective when we post the revised Cookies Policy on our website. We recommend
                that you check this
                page periodically for any changes.
              </p>
              <p>
                If you have any questions or concerns about our use of cookies, please contact us at [contact email].
              </p>
            </section>
          </div>

          <!-- Terms of Service -->
          <div v-show="activeTab === 'terms'" class="animate-fade-in">
            <h2>Terms of Service</h2>

            <!-- Introduction -->
            <section class="mb-8">
              <p>
                These Terms of Service ("Terms") govern your access to and use of the services, including our website,
                APIs, email notifications, applications, buttons, widgets, and our other covered services (collectively,
                "Services")
                that are provided by [Company Name] ("Company", "we", "us", or "our").
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these
                Terms,
                you may not access or use our Services.
              </p>
              <p class="font-bold">
                Please read these Terms carefully before using our Services.
              </p>
            </section>

            <!-- Access to Services -->
            <section class="mb-8">
              <h3>1. Access to Services</h3>
              <p>
                You may access and use our Services only if you agree to form a binding contract with us and are not a
                person
                barred from receiving services under the laws of the applicable jurisdiction. If you are accepting these
                Terms
                and using the Services on behalf of a company, organization, government, or other legal entity, you
                represent
                and warrant that you are authorized to do so.
              </p>
              <p>
                You may use our Services only in compliance with these Terms and all applicable local, state, national,
                and
                international laws, rules, and regulations.
              </p>
            </section>

            <!-- User Accounts -->
            <section class="mb-8">
              <h3>2. User Accounts</h3>
              <p>
                You may need to create an account to use some of our Services. You are responsible for safeguarding your
                account,
                so use a strong password and limit its use to this account. We cannot and will not be liable for any
                loss or damage
                arising from your failure to comply with the above.
              </p>
              <p>
                You may control your user profile and how you interact with the Services by adjusting your settings. By
                providing us
                with your email address, you consent to our using the email address to send you Service-related notices.
              </p>
            </section>

            <!-- Content and Licenses -->
            <section class="mb-8">
              <h3>3. Content and Licenses</h3>
              <p>
                You retain your rights to any content you submit, post, or display on or through the Services. By
                submitting, posting,
                or displaying content on or through the Services, you grant us a worldwide, non-exclusive, royalty-free
                license to use,
                copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content.
              </p>
              <p>
                You represent and warrant that you have, or have obtained, all rights, licenses, consents, permissions,
                power and/or
                authority necessary to grant the rights granted herein for any content that you submit, post, or display
                on or through
                the Services.
              </p>
            </section>

            <!-- Prohibited Conduct -->
            <section class="mb-8">
              <h3>4. Prohibited Conduct</h3>
              <p>You agree not to engage in any of the following prohibited activities:</p>
              <ul class="list-disc pl-6">
                <li>Violating any law, rule, or regulation</li>
                <li>Infringing the intellectual property rights of others</li>
                <li>Distributing malicious code or engaging in disruptive activities</li>
                <li>Sending unauthorized advertising or spam</li>
                <li>Impersonating another person or entity</li>
                <li>Interfering with the proper working of the Services</li>
                <li>Attempting to bypass any security measures of the Services</li>
              </ul>
            </section>

            <!-- Limitation of Liability -->
            <section class="mb-8">
              <h3>5. Limitation of Liability</h3>
              <p>
                To the maximum extent permitted by applicable law, in no event shall the Company, its affiliates,
                agents, directors,
                employees, suppliers, or licensors be liable for any indirect, punitive, incidental, special,
                consequential, or
                exemplary damages, including without limitation damages for loss of profits, goodwill, use, data, or
                other intangible
                losses, arising out of or relating to the use of, or inability to use, the Services.
              </p>
              <p>
                To the maximum extent permitted by applicable law, the Company assumes no liability or responsibility
                for any:
              </p>
              <ul class="list-disc pl-6">
                <li>Errors, mistakes, or inaccuracies of content</li>
                <li>Personal injury or property damage resulting from your access to or use of our Services</li>
                <li>Unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Interruption or cessation of transmission to or from our Services</li>
                <li>Bugs, viruses, trojan horses, or the like transmitted to or through our Services</li>
              </ul>
            </section>

            <!-- Termination -->
            <section class="mb-8">
              <h3>6. Termination</h3>
              <p>
                We may suspend or terminate your access to all or part of the Services at any time, with or without
                cause, with
                or without notice, effective immediately.
              </p>
              <p>
                Upon termination, all licenses and other rights granted to you in these Terms will immediately cease.
                The Company
                is not liable to you or any third-party for any termination of your access to the Services.
              </p>
            </section>

            <!-- Changes to Terms -->
            <section class="mb-8">
              <h3>7. Changes to Terms</h3>
              <p>
                We may revise these Terms from time to time. The most current version will always be on this page. If
                the revision,
                in our sole discretion, is material, we will notify you via email to the email address associated with
                your account
                or through the Services. By continuing to access or use the Services after those revisions become
                effective, you agree
                to be bound by the revised Terms.
              </p>
            </section>

            <!-- Governing Law -->
            <section class="mb-8">
              <h3>8. Governing Law</h3>
              <p>
                These Terms shall be governed and construed in accordance with the laws of [Your State/Country], without
                regard to
                its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                rights. If any
                provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of
                these Terms
                will remain in effect.
              </p>
            </section>

            <!-- Contact Information -->
            <section>
              <h3>9. Contact Us</h3>
              <p>
                If you have any questions about these Terms, please contact us at [contact email].
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tabs = [
  { id: 'privacy', name: 'Privacy Policy' },
  { id: 'cookies', name: 'Cookies Policy' },
  { id: 'terms', name: 'Terms of Service' }
];

const activeTab = ref('privacy');
</script>
