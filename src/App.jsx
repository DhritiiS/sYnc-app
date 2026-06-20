import React, { useState } from 'react';
import { Home, Sparkles, Heart, Apple, Brain, Dumbbell, Moon, ChevronDown, CheckCircle2, Circle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function App() {
  // --- STATE MANAGEMENT ---
  const [activeTab, setActiveTab] = useState('home');
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [userName, setUserName] = useState('');
  
  // Master Tracker State
  const [wins, setWins] = useState({ nutrition: false, mental: false, exercise: false, sleep: false });
  const totalWins = Object.values(wins).filter(Boolean).length;

  // Accordion State
  const [activePane, setActivePane] = useState('nutrition');

  // --- ONBOARDING MODAL ---
  if (!onboardingComplete) {
    return (
      <div className="fixed inset-0 bg-cream flex items-center justify-center p-6 z-50">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full border border-coral/30">
          <h2 className="text-3xl font-serif text-slate-800 mb-2">Welcome to sYnc</h2>
          <p className="text-slate-500 mb-6">Before moving further, let's enter your profile details.</p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
              <input 
                type="text" 
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-coral" 
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Age</label>
              <input type="number" className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-coral" placeholder="e.g. 24" />
            </div>
            <button 
              onClick={() => setOnboardingComplete(true)}
              className="w-full bg-coral text-white font-medium py-3 rounded-xl hover:bg-[#f3b5b0] transition-colors mt-4"
            >
              Continue to Sanctuary
            </button>
            <button 
              onClick={() => setOnboardingComplete(true)}
              className="w-full text-slate-400 text-sm mt-2 hover:text-slate-600"
            >
              Skip for now
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- MAIN LAYOUT ---
  return (
    <div className="min-h-screen flex bg-cream font-sans">
      
      {/* SIDEBAR */}
      <div className="w-64 border-r border-slate-200 p-6 flex flex-col justify-between bg-white hidden md:flex">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 rounded-full bg-coral flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
            <div>
              <h1 className="font-serif font-bold text-xl text-slate-800">sYnc</h1>
              <p className="text-[10px] tracking-widest text-slate-400 uppercase">Life OS</p>
            </div>
          </div>

          <nav className="space-y-2">
            <SidebarItem icon={<Home size={20}/>} title="Sanctuary Home" subtitle="The main habit loop" active={activeTab === 'home'} onClick={() => setActiveTab('home')} />
            <SidebarItem icon={<Sparkles size={20}/>} title="Insight Studio" subtitle="Reflection & screening" active={activeTab === 'insight'} onClick={() => setActiveTab('insight')} />
            <SidebarItem icon={<Heart size={20}/>} title="Care Circle" subtitle="Empowerment community" active={activeTab === 'care'} onClick={() => setActiveTab('care')} />
          </nav>
        </div>

        <div className="bg-coral/10 p-4 rounded-xl border border-coral/20">
          <p className="text-sm font-serif italic text-slate-700">"You are not behind. You are exactly where your healing begins."</p>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 overflow-y-auto p-8 lg:px-16">
        
        {/* TAB 1: SANCTUARY HOME */}
        {activeTab === 'home' && (
          <div className="max-w-4xl mx-auto animation-fade-in">
            <header className="mb-10">
              <p className="text-coral font-semibold tracking-widest text-xs uppercase mb-2">Saboo's Life OS Dashboard</p>
              <h1 className="text-4xl font-serif text-slate-800 mb-3">
                Good morning{userName ? `, ${userName}` : ''}.
              </h1>
              <p className="text-slate-500">Your body is resilient, and you are in complete sYnc today. Light up your pillars to feel the shift.</p>
              
              {/* Dynamic Feedback Banner */}
              {totalWins >= 2 && (
                <div className="mt-4 bg-coral text-white px-4 py-3 rounded-lg text-sm font-medium flex items-center gap-2">
                  <span>✨</span> {totalWins === 4 ? "👑 Absolute sYnc Champion! Your body is thanking you right now." : "Awesome work for showing up for yourself today! Incredible consistency."}
                </div>
              )}
            </header>

            {/* MASTER TRACKER */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-10">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-slate-800 font-serif">Master Tracker</h2>
                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">{totalWins}/4 wins</span>
              </div>
              
              <div className="h-2 w-full bg-slate-100 rounded-full mb-6 overflow-hidden">
                <div className="h-full bg-coral transition-all duration-500" style={{ width: `${(totalWins / 4) * 100}%` }}></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <TrackerCard icon={<Apple/>} title="Nutrition" won={wins.nutrition} />
                <TrackerCard icon={<Brain/>} title="Mental Health" won={wins.mental} />
                <TrackerCard icon={<Dumbbell/>} title="Exercise" won={wins.exercise} />
                <TrackerCard icon={<Moon/>} title="Sleep" won={wins.sleep} />
              </div>
            </div>

            {/* ACTION PANES */}
            <h3 className="text-xl font-serif text-slate-800 mb-4 font-bold">Today's Action Panes</h3>
            <div className="space-y-4">
              
              {/* Nutrition Accordion */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="p-5 flex justify-between items-center cursor-pointer hover:bg-slate-50 transition" onClick={() => setActivePane(activePane === 'nutrition' ? '' : 'nutrition')}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"><Apple size={20}/></div>
                    <div>
                      <h4 className="font-bold text-slate-800">Nutrition</h4>
                      <p className="text-xs text-slate-500">Post-meal stroll + protein-first breakfast</p>
                    </div>
                  </div>
                  <ChevronDown className={`text-slate-400 transition-transform ${activePane === 'nutrition' ? 'rotate-180' : ''}`} />
                </div>
                {activePane === 'nutrition' && (
                  <div className="p-5 border-t border-slate-100 bg-slate-50/50">
                    <div className="space-y-3 mb-4">
                      <CheckboxItem label="Protein-First Breakfast" />
                      <CheckboxItem label="10-Min Post-Meal Stroll" />
                    </div>
                    <button 
                      onClick={() => setWins({...wins, nutrition: true})}
                      className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${wins.nutrition ? 'bg-green-100 text-green-700' : 'bg-coral text-white'}`}
                    >
                      {wins.nutrition ? 'Pillar Completed ✓' : 'Mark Pillar as Win'}
                    </button>
                  </div>
                )}
              </div>

              {/* Sleep Accordion */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="p-5 flex justify-between items-center cursor-pointer hover:bg-slate-50 transition" onClick={() => setActivePane(activePane === 'sleep' ? '' : 'sleep')}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"><Moon size={20}/></div>
                    <div>
                      <h4 className="font-bold text-slate-800">Sleep Architecture</h4>
                      <p className="text-xs text-slate-500">Friction reduction timeline</p>
                    </div>
                  </div>
                  <ChevronDown className={`text-slate-400 transition-transform ${activePane === 'sleep' ? 'rotate-180' : ''}`} />
                </div>
                {activePane === 'sleep' && (
                  <div className="p-5 border-t border-slate-100 bg-slate-50/50">
                    <div className="space-y-3 mb-4">
                      <CheckboxItem label="Layout loose workout clothes for tomorrow" />
                      <CheckboxItem label="Lights dimmed, blue screens off" />
                    </div>
                    <button onClick={() => setWins({...wins, sleep: true})} className="w-full py-2 rounded-lg text-sm font-medium bg-coral text-white">Mark Pillar as Win</button>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: INSIGHT STUDIO */}
        {activeTab === 'insight' && (
          <div className="max-w-4xl mx-auto animation-fade-in">
            <h1 className="text-3xl font-serif text-slate-800 mb-6">Insight Studio</h1>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-800 mb-4">Weight Trend</h3>
                  <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={[{day: 'Mon', wt: 62}, {day: 'Tue', wt: 62.5}, {day: 'Wed', wt: 61.8}]}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} />
                        <YAxis domain={['dataMin - 2', 'dataMax + 2']} axisLine={false} tickLine={false} />
                        <Tooltip />
                        <Line type="monotone" dataKey="wt" stroke="#F8C5C1" strokeWidth={3} dot={{r: 4, fill: '#F8C5C1'}} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 text-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-coral mb-4">
                    <Sparkles size={18} />
                    <span className="text-xs font-bold tracking-wider uppercase">sYnc ML Engine Active</span>
                  </div>
                  <h3 className="text-2xl font-serif mb-2">Analyzing Clusters</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Based on cross-cluster symptom modeling of your active inputs, our trained feature weight algorithm identifies an overlapping correlation between your logged cycle horizon variance and metabolic fatigue parameters. (Confidence: 94.2%)
                  </p>
                </div>
                <button className="w-full bg-white text-slate-800 font-bold py-3 rounded-xl hover:bg-slate-100 transition">
                  📄 Download Doctor's Report
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CARE CIRCLE */}
        {activeTab === 'care' && (
          <div className="max-w-4xl mx-auto animation-fade-in">
             <h1 className="text-3xl font-serif text-slate-800 mb-6">Care Circle</h1>
             <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-6">
               <div className="bg-coral/20 text-coral-800 p-3 rounded-lg mb-4 text-sm font-medium">
                 Safe Space: Ask anything without judgment or societal stigma.
               </div>
               <div className="h-64 bg-slate-50 rounded-xl border border-slate-100 mb-4 p-4 flex flex-col justify-end">
                 <p className="text-slate-400 text-sm text-center">Your anonymous myth-buster chat session...</p>
               </div>
               <div className="flex flex-wrap gap-2">
                 <span className="bg-slate-100 text-slate-600 px-3 py-2 rounded-lg text-sm cursor-pointer hover:bg-coral hover:text-white transition">"Society says this is my fault. Is it?"</span>
               </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SidebarItem({ icon, title, subtitle, active, onClick }) {
  return (
    <div onClick={onClick} className={`p-3 rounded-xl cursor-pointer flex items-center gap-3 transition-colors ${active ? 'bg-coral/20' : 'hover:bg-slate-50'}`}>
      <div className={`${active ? 'text-coral' : 'text-slate-400'}`}>{icon}</div>
      <div>
        <h3 className={`font-semibold text-sm ${active ? 'text-slate-800' : 'text-slate-600'}`}>{title}</h3>
        <p className="text-[11px] text-slate-400">{subtitle}</p>
      </div>
    </div>
  );
}

function TrackerCard({ icon, title, won }) {
  return (
    <div className={`border rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all ${won ? 'border-coral bg-coral/5' : 'border-slate-100 bg-slate-50'}`}>
      <div className={`w-10 h-10 rounded-full mb-3 flex items-center justify-center ${won ? 'bg-coral text-white' : 'bg-white text-slate-400 shadow-sm'}`}>{icon}</div>
      <h4 className={`text-sm font-bold ${won ? 'text-slate-800' : 'text-slate-600'}`}>{title}</h4>
      <p className={`text-xs mt-1 ${won ? 'text-coral font-medium' : 'text-slate-400'}`}>{won ? 'Completed' : 'In progress'}</p>
    </div>
  );
}

function CheckboxItem({ label }) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex items-center gap-3 cursor-pointer" onClick={() => setChecked(!checked)}>
      {checked ? <CheckCircle2 className="text-coral" size={20} /> : <Circle className="text-slate-300" size={20} />}
      <span className={`text-sm ${checked ? 'text-slate-500 line-through' : 'text-slate-700'}`}>{label}</span>
    </div>
  );
}