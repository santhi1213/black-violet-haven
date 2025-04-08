
import React from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const PrivacyPolicy = () => {
  const lastUpdated = "April 1, 2023";
  
  return (
    <div className="py-8 px-4 md:px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-gray-400 mb-8">Last Updated: {lastUpdated}</p>
      
      <Card className="p-8 glass-card">
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
              <p>
                At LMS Platform, we respect your privacy and are committed to protecting your personal data. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you use our Service.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section>
              <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
              <p className="mb-3">We collect the following types of information:</p>
              
              <h3 className="font-medium mt-4 mb-2">Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Name, email address, and contact details</li>
                <li>Billing information and transaction history</li>
                <li>Account credentials</li>
                <li>Profile information, including profile pictures</li>
                <li>Educational background and preferences</li>
              </ul>
              
              <h3 className="font-medium mt-4 mb-2">Usage Information</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Interaction with courses and content</li>
                <li>Progress and completion data</li>
                <li>Assessment results and submissions</li>
                <li>Participation in forums and discussions</li>
              </ul>
              
              <h3 className="font-medium mt-4 mb-2">Technical Information</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>IP address and browser type</li>
                <li>Device information</li>
                <li>Log data and usage statistics</li>
                <li>Cookie data</li>
              </ul>
            </section>
            
            <Separator className="my-6" />
            
            <section>
              <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
              <p className="mb-3">We use the collected information for various purposes, including:</p>
              
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Providing, maintaining, and improving our Service</li>
                <li>Processing transactions and managing accounts</li>
                <li>Personalizing your experience</li>
                <li>Sending administrative information, updates, and marketing communications</li>
                <li>Responding to inquiries and providing customer support</li>
                <li>Analyzing usage patterns and optimizing our offerings</li>
                <li>Protecting against fraudulent or unauthorized activity</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>
            
            <Separator className="my-6" />
            
            <section>
              <h2 className="text-xl font-semibold mb-3">4. Sharing of Your Information</h2>
              <p className="mb-3">We may share your information with:</p>
              
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Service providers who perform services on our behalf</li>
                <li>Partners with whom we offer co-branded services or joint marketing activities</li>
                <li>Educational institutions or employers (if you're enrolled through them)</li>
                <li>Other users (for collaborative features, with appropriate permissions)</li>
                <li>Legal authorities when required by law</li>
              </ul>
              
              <p className="mt-4">
                We do not sell your personal information to third parties.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section>
              <h2 className="text-xl font-semibold mb-3">5. Cookies and Tracking Technologies</h2>
              <p className="mb-3">
                We use cookies and similar tracking technologies to collect and track information about 
                your browsing activities on our Service. You can instruct your browser to refuse all 
                cookies or to indicate when a cookie is being sent.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section>
              <h2 className="text-xl font-semibold mb-3">6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the internet or electronic storage is 100% secure, and 
                we cannot guarantee absolute security.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section>
              <h2 className="text-xl font-semibold mb-3">7. Your Data Rights</h2>
              <p className="mb-3">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Accessing your personal information</li>
                <li>Correcting inaccurate information</li>
                <li>Deleting your information</li>
                <li>Restricting or objecting to processing</li>
                <li>Data portability</li>
                <li>Withdrawing consent</li>
              </ul>
              
              <p className="mt-4">
                To exercise these rights, please contact us using the information provided at the end of this policy.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section>
              <h2 className="text-xl font-semibold mb-3">8. Children's Privacy</h2>
              <p>
                Our Service is not intended for children under the age of 16. We do not knowingly collect 
                personal information from children under 16. If we learn that we have collected personal 
                information from a child under 16, we will promptly delete that information.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section>
              <h2 className="text-xl font-semibold mb-3">9. Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last Updated" date. You are 
                advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section>
              <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-3">
                Email: privacy@lmsplatform.com<br />
                Address: 123 Education Lane, San Francisco, CA 94105<br />
                Phone: +1 (800) 123-4567
              </p>
            </section>
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;
