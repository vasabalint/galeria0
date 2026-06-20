import React, { useState } from 'react';
import { Mail, Instagram, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // IMPORTANT: Replace this with your actual Web3Forms access key
    // You can get one for free at https://web3forms.com/
    const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        console.error("Form error:", data.message);
        setStatus('error');
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setStatus('error');
    }
    
    // Reset status after a few seconds so they can submit again if needed
    if (status !== 'submitting') {
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="bg-[#FAF9F6] text-[#33322E] py-24 px-6 md:py-32 border-t border-[#E8E4DF]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Left Side: Information */}
        <div className="md:w-5/12 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#5A5A40] tracking-tight italic">Inquiries & Access</h2>
          <p className="text-[#6E6A62] font-sans mb-12 leading-relaxed text-lg">
            For exhibition details, private commissions, or purchasing available works, please reach out to the studio directly. We aim to respond within 48 hours.
          </p>
          
          <div className="space-y-8">
            <a href="mailto:studio@eleanorvance.art" className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-[#8B7E66] flex items-center justify-center group-hover:bg-[#8B7E66] group-hover:text-white text-[#8B7E66] transition-all duration-300">
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <span className="font-sans tracking-wide text-[#33322E] group-hover:text-[#8B7E66] transition-colors">
                studio@eleanorvance.art
              </span>
            </a>
            
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-[#8B7E66] flex items-center justify-center group-hover:bg-[#8B7E66] group-hover:text-white text-[#8B7E66] transition-all duration-300">
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <span className="font-sans tracking-wide text-[#33322E] group-hover:text-[#8B7E66] transition-colors">
                @eleanorvance_studio
              </span>
            </a>
            
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-[#8B7E66] flex items-center justify-center text-[#8B7E66]">
                <MapPin className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <span className="font-sans tracking-wide text-[#33322E]">
                Le Marais, Paris <br/><span className="text-sm text-[#8B7E66] uppercase tracking-widest font-semibold mt-1 block">Visits by appointment only</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Form UI */}
        <div className="md:w-7/12">
          <form 
            className="space-y-6 p-8 md:p-12 bg-[#F5F2ED] rounded-3xl border border-[#E8E4DF] relative"
            onSubmit={handleSubmit}
          >
            {/* Success/Error overlays could go here, but we will just show inline messages under the button */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#8B7E66] font-sans font-bold mb-2">First Name</label>
                <input 
                  type="text" 
                  name="first_name"
                  required
                  className="w-full bg-white border border-[#E8E4DF] text-[#33322E] p-4 rounded-xl focus:border-[#8B7E66] outline-none placeholder:text-[#CDC1B3] font-sans transition-colors" 
                  placeholder="Jane"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#8B7E66] font-sans font-bold mb-2">Last Name</label>
                <input 
                  type="text" 
                  name="last_name"
                  required
                  className="w-full bg-white border border-[#E8E4DF] text-[#33322E] p-4 rounded-xl focus:border-[#8B7E66] outline-none placeholder:text-[#CDC1B3] font-sans transition-colors" 
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#8B7E66] font-sans font-bold mb-2">Email Address</label>
              <input 
                type="email" 
                name="email"
                required
                className="w-full bg-white border border-[#E8E4DF] text-[#33322E] p-4 rounded-xl focus:border-[#8B7E66] outline-none placeholder:text-[#CDC1B3] font-sans transition-colors" 
                placeholder="jane@example.com"
              />
            </div>
            
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#8B7E66] font-sans font-bold mb-2">Message</label>
              <textarea 
                rows={5} 
                name="message"
                required
                className="w-full bg-white border border-[#E8E4DF] text-[#33322E] p-4 rounded-xl focus:border-[#8B7E66] outline-none placeholder:text-[#CDC1B3] font-sans resize-none transition-colors" 
                placeholder="I am inquiring about..."
              />
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full py-4 bg-[#5A5A40] text-white rounded-full font-sans text-xs uppercase tracking-widest hover:bg-[#4A4A35] transition-all mt-4 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            
            {/* Status Messages */}
            {status === 'success' && (
              <div className="mt-4 p-4 bg-[#8B7E66]/10 text-[#5A5A40] rounded-xl flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#5A5A40]" />
                <p>Your message has been sent successfully. The studio will be in touch shortly.</p>
              </div>
            )}
            
            {status === 'error' && (
              <div className="mt-4 p-4 bg-red-50 text-red-800 rounded-xl flex items-center gap-3 text-sm">
                <AlertCircle className="w-5 h-5" />
                <p>There was an error sending your message. Please ensure your access key is valid or try emailing directly.</p>
              </div>
            )}
            
            {status === 'idle' && (
              <p className="text-center text-[10px] text-[#8B7E66] mt-4 font-sans uppercase tracking-widest">
                Protected by secure form submission
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
