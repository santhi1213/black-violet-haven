
import React from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const TermsOfService = () => {
  const lastUpdated = "April 1, 2023";
  
  return (
    <div className="py-8 px-4 md:px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
      <p className="text-gray-400 mb-8">Last Updated: {lastUpdated}</p>
      
      <Card className="p-8 glass-card">
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
              <p>
                Welcome to LMS Platform. These Terms of Service ("Terms") govern your access to and use 
                of the LMS Platform website, services, and applications (collectively, the "Service"). 
                By accessing or using the Service, you agree to be bound by these Terms.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section>
              <h2 className="text-xl font-semibold mb-3">2. Definitions</h2>
              <p className="mb-3">
                Throughout these Terms, we use certain defined terms:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>"Service" refers to the LMS Platform website, applications, and all services provided by LMS Platform.</li>
                <li>"User" refers to any individual who accesses or uses the Service.</li>
                <li>"Content" refers to text, graphics, images, music, software, audio, video, information or other materials.</li>
                <li>"User Content" refers to Content that users submit, post, or transmit to, through, or in connection with the Service.</li>
              </ul>
            </section>
            
            <Separator className="my-6" />
            
            <section>
              <h2 className="text-xl font-semibold mb-3">3. Account Registration</h2>
              <p className="mb-3">
                To access certain features of the Service, you must register for an account. You agree to provide 
                accurate, current, and complete information during the registration process and to update such 
                information to keep it accurate, current, and complete.
              </p>
              <p>
                You are responsible for safeguarding your password and for all activities that occur under your account. 
                You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section>
              <h2 className="text-xl font-semibold mb-3">4. User Conduct</h2>
              <p className="mb-3">
                You agree not to engage in any of the following prohibited activities:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Violating any applicable laws, regulations, or third-party rights.</li>
                <li>Using the Service for any illegal or unauthorized purpose.</li>
                <li>Posting or transmitting viruses, malware, or other harmful computer code.</li>
                <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Service.</li>
                <li>Collecting or storing personal data about other users without their express permission.</li>
              </ul>
            </section>
            
            <Separator className="my-6" />
            
            <section>
              <h2 className="text-xl font-semibold mb-3">5. Content and Intellectual Property</h2>
              <p className="mb-3">
                The Service and its original content, features, and functionality are owned by LMS Platform and 
                are protected by international copyright, trademark, patent, trade secret, and other intellectual 
                property or proprietary rights laws.
              </p>
              <p>
                By submitting User Content to the Service, you grant LMS Platform a worldwide, non-exclusive, 
                royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works 
                from, distribute, and display such User Content in connection with providing the Service.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section>
              <h2 className="text-xl font-semibold mb-3">6. Subscriptions and Payments</h2>
              <p className="mb-3">
                Some aspects of the Service require payment of fees. You agree to pay all fees associated with 
                your use of the Service.
              </p>
              <p>
                All fees are exclusive of all taxes, levies, or duties imposed by taxing authorities, and you 
                shall be responsible for payment of all such taxes, levies, or duties.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section>
              <h2 className="text-xl font-semibold mb-3">7. Termination</h2>
              <p>
                LMS Platform reserves the right to terminate or suspend your account and access to the Service 
                at any time, without prior notice or liability, for any reason whatsoever, including without 
                limitation if you breach these Terms.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section>
              <h2 className="text-xl font-semibold mb-3">8. Disclaimer of Warranties</h2>
              <p>
                THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. LMS PLATFORM EXPRESSLY DISCLAIMS 
                ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED 
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section>
              <h2 className="text-xl font-semibold mb-3">9. Limitation of Liability</h2>
              <p>
                IN NO EVENT SHALL LMS PLATFORM, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE FOR ANY 
                INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF, OR IN ANY WAY 
                CONNECTED WITH, YOUR USE OF OR INABILITY TO USE THE SERVICE.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section>
              <h2 className="text-xl font-semibold mb-3">10. Changes to Terms</h2>
              <p>
                LMS Platform reserves the right to modify or replace these Terms at any time. It is your 
                responsibility to review these Terms periodically for changes. Your continued use of the 
                Service following the posting of any changes constitutes acceptance of those changes.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section>
              <h2 className="text-xl font-semibold mb-3">11. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at legal@lmsplatform.com.
              </p>
            </section>
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
};

export default TermsOfService;
