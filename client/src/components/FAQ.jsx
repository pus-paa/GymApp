
// aos
import React, { useEffect } from 'react';
import { Heading, FaqComponent } from ".";
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,       // Duration of the animation
      offset: 100,          // Delay the animation until the element is in the viewport
      easing: 'ease-in-out', // Controls the smoothness of the animation
      once: true,           // Whether animation should happen only once
      mirror: false         // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <section className='pt-10 relative'>
      <Heading name="Frequently Asked Questions" />

      <div className="container mx-auto py-10 px-6">
        <div className="flex flex-col">
          <div data-aos="fade-up">
            <FaqComponent
              question="How To SignUp And Login?"
              answer="To sign up, click on the Register button and fill in your details including name, email, password (minimum 8 characters with uppercase, lowercase, and a number), city, and phone number. Once registered, you can log in using your email and password. If you forget your password, you can use the 'Forgot Password' option to reset it."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <FaqComponent
              question="What Is The Fees Of The Plans?"
              answer="Our fitness plans offer flexible pricing options with both monthly and yearly subscription models. Each plan has different pricing tiers based on the features and duration. You can view all available plans and their detailed pricing on the Plans section of our website. Prices vary depending on the plan you choose, and yearly subscriptions typically offer better value compared to monthly payments."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <FaqComponent
              question="Is The Fees Refundable?"
              answer="Refund policies vary depending on the plan and subscription type. Generally, we offer a 7-day money-back guarantee for new subscriptions if you're not satisfied with the service. Refund requests must be submitted within the specified timeframe. For more specific refund terms, please contact our support team or refer to the terms and conditions of your selected plan."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <FaqComponent
              question="Is It Reliable To Buy Our Packs?"
              answer="Yes, absolutely! We use secure payment processing systems to protect your financial information. All transactions are encrypted and processed through trusted payment gateways. We have a proven track record of serving thousands of satisfied customers with secure subscriptions. Your personal and payment information is kept confidential and secure according to industry standards."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <FaqComponent
              question="How Much Time Does It Take to Complete A Pack?"
              answer="The duration to complete a pack depends on the specific plan you choose and your personal fitness goals. Plans are designed with different timelines - some are structured for 30-day programs, while others may span 60 or 90 days. The completion time also depends on your commitment level and how consistently you follow the workout routines and meal plans included in your subscription."
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-gym-darker via-gym-gray to-gym-darker opacity-100 pointer-events-none z-[-1]"></div>
    </section>
  );
};

export default FAQ;

