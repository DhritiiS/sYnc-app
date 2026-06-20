import React, { useState } from 'react';
import { Search, Home, FolderKanban, MessageSquare, LayoutGrid, LayoutTemplate, Flower2, Sparkles, Heart, Apple, Brain, Dumbbell, Moon, Bell, ChevronUp, ChevronDown, Circle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex bg-cream font-sans text-slate-800">
      
      {/* SIDEBAR (Dark Mode matching V0) */}
      <div className="w-64 bg-[#0a0a0a] text-gray-300 flex flex-col justify-between hidden md:flex h-screen sticky top-0">
        <div>
          {/* Header */}
          <div className="p-4 border-b border-gray-800 flex items-center gap-3">
            <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
              <LayoutGrid size={12} className="text-white" />
            </div>
            <span className="font-medium text-sm text-white">Anarchy</span>
          </div>

          <div className="p-4">
            <button className="w-full bg-[#1a1a1a] text-white rounded-lg py-2 text-sm flex justify-between items-center px-4 mb-6 border border-gray-800 hover:bg-gray-800 transition">
              <span>New Chat</span>
              <ChevronDown size={14} />
            </button>

            <nav className="space-y-1 mb-8">
              <SidebarItem icon={<Search size={18}/>} title="Search" />
              <SidebarItem icon={<Home size={18}/>} title="Home" />
              <SidebarItem icon={<FolderKanban size={18}/>} title="Projects" />
              <SidebarItem icon={<MessageSquare size={18}/>} title="Chats" />
              <SidebarItem icon={<LayoutGrid size={18}/>} title="Design Systems" />
              <SidebarItem icon={<LayoutTemplate size={18}/>} title="Templates" />
            </nav>

            <div className="mb-4">
              <div className="flex justify-between items-center text-xs font-medium text-gray-500 mb-2 px-2">
                <span>Favorites</span>
                <ChevronDown size={14} className="-rotate-90" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-medium text-gray-500 mb-2 px-2">
                <span>Recent Chats</span>
                <ChevronDown size={14} />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 px-2 py-2 text-sm hover:bg-gray-900 rounded-lg cursor-pointer">
                  <div className="w-4 h-4 rounded-full border border-gray-600 border-dashed"></div>
                  <span>sYnc dashboard app</span>
                </div>
                <div className="flex items-center justify-between px-2 py-2 text-sm bg-gray-900 text-white rounded-lg cursor-pointer">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-gray-500 border-dashed"></div>
                    <span>AuraSanctuary Life OS</span>
                  </div>
                  <span className="text-gray-500">•••</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-800 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
            <span className="text-sm">dhritiis</span>
          </div>
          <span className="text-xs bg-gray-800 px-2 py-1 rounded">$0</span>
        </div>
      </div>

      {/* SECONDARY SIDEBAR (AuraSanctuary Menu) */}
      <div className="w-72 bg-white border-r border-gray-200 p-6 flex flex-col justify-between hidden lg:flex h-screen sticky top-0">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-coral-50 flex items-center justify-center">
              <Flower2 size={20} className="text-coral-800" />
            </div>
            <div>
              <h1 className="font-serif font-bold text-slate-800 text-lg">AuraSanctuary</h1>
              <p className="text-[10px] tracking-widest text-slate-400 uppercase">Life OS</p>
            </div>
          </div>

          <nav className="space-y-2">
            <div className="bg-coral-100 p-4 rounded-3xl cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full shadow-sm"><Home size={18} className="text-coral-800"/></div>
                <div>
                  <h3 className="font-medium text-coral-900 text-sm">Sanctuary Home</h3>
                  <p className="text-xs text-coral-800/70">The main habit loop</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 rounded-3xl cursor-pointer hover:bg-gray-50 transition">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full text-gray-500"><Sparkles size={18}/></div>
                <div>
                  <h3 className="font-medium text-slate-700 text-sm">Insight Studio</h3>
                  <p className="text-xs text-slate-400">Reflection & screening</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-3xl cursor-pointer hover:bg-gray-50 transition">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full text-gray-500"><Heart size={18}/></div>
                <div>
                  <h3 className="font-medium text-slate-700 text-sm">Care Circle</h3>
                  <p className="text-xs text-slate-400">Empowerment community</p>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="bg-coral-50 p-6 rounded-3xl">
          <p className="text-sm font-serif text-coral-900 leading-relaxed">"You are not behind. You are exactly where your healing begins."</p>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 overflow-y-auto p-8 lg:p-12">
        <div className="max-w-4xl mx-auto">
          
          <header className="mb-10">
            <p className="text-coral-800 font-semibold tracking-widest text-xs uppercase mb-3">Saboo's Life OS Dashboard</p>
            <h2 className="text-4xl font-serif text-slate-800 mb-4">Welcome back to your sanctuary</h2>
            <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">Small, kind actions across four pillars. Light up two to feel the shift, four to feel unstoppable.</p>
          </header>

          {/* MASTER TRACKER */}
          <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-sm mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-800 font-serif">Master Tracker</h2>
              <span className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-medium">0/4 wins</span>
            </div>
            
            <div className="h-3 w-full bg-gray-100 rounded-full mb-8"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border border-gray-200 rounded-3xl p-6 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 mb-4"><Apple size={20}/></div>
                <h4 className="text-sm font-bold text-slate-800">Nutrition</h4>
                <p className="text-xs mt-1 text-slate-400">In progress</p>
              </div>
              <div className="border border-gray-200 rounded-3xl p-6 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 mb-4"><Brain size={20}/></div>
                <h4 className="text-sm font-bold text-slate-800">Mental Health</h4>
                <p className="text-xs mt-1 text-slate-400">In progress</p>
              </div>
              <div className="border border-gray-200 rounded-3xl p-6 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 mb-4"><Dumbbell size={20}/></div>
                <h4 className="text-sm font-bold text-slate-800">Exercise</h4>
                <p className="text-xs mt-1 text-slate-400">In progress</p>
              </div>
              <div className="border border-gray-200 rounded-3xl p-6 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 mb-4"><Moon size={20}/></div>
                <h4 className="text-sm font-bold text-slate-800">Sleep</h4>
                <p className="text-xs mt-1 text-slate-400">In progress</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-serif text-slate-800 mb-6 font-bold">Today's Action Panes</h3>
          
          <div className="space-y-6 mb-12">
            
            {/* NUTRITION PANE */}
            <div className="bg-white rounded-[2rem] border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-6 flex justify-between items-center cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400"><Apple size={24}/></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">Nutrition</h4>
                    <p className="text-sm text-slate-400">Post-meal stroll + protein-first breakfast</p>
                  </div>
                </div>
                <ChevronUp className="text-gray-400" />
              </div>
              
              <div className="px-6 pb-6 pt-2">
                <div className="space-y-3 mb-6">
                  <div className="border border-gray-100 rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50">
                    <Circle className="text-gray-200" size={24} />
                    <div>
                      <p className="text-sm font-medium text-slate-700">10-Min Post-Meal Stroll</p>
                      <p className="text-xs text-slate-400">Helps muscles soak up glucose gently</p>
                    </div>
                  </div>
                  <div className="border border-gray-100 rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50">
                    <Circle className="text-gray-200" size={24} />
                    <div>
                      <p className="text-sm font-medium text-slate-700">Protein-First Breakfast</p>
                      <p className="text-xs text-slate-400">Steadies energy and curbs cravings</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFF0EF] rounded-2xl p-4 flex gap-4 mb-4">
                  <Bell className="text-coral-800 mt-1" size={20} />
                  <div>
                    <p className="text-sm font-bold text-slate-800">Glucose alarm</p>
                    <p className="text-sm text-slate-600">Reminder set for 30 min after lunch — time for your stroll.</p>
                  </div>
                </div>

                <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-bold text-slate-800">Insulin resistance, in plain language</h5>
                    <span className="text-coral-800 text-sm cursor-pointer hover:underline">Edit</span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Insulin resistance means your cells respond less to insulin, so your body makes more of it. That extra insulin can fuel cravings and make weight feel "stuck". Protein-first meals and a short walk after eating help your muscles soak up glucose gently — no punishment required.
                  </p>
                </div>
              </div>
            </div>

            {/* MENTAL HEALTH PANE */}
            <div className="bg-white rounded-[2rem] border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-6 flex justify-between items-center cursor-pointer border-b border-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400"><Brain size={24}/></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">Mental Health</h4>
                    <p className="text-sm text-slate-400">Box breathing + cognitive offload journal</p>
                  </div>
                </div>
                <ChevronUp className="text-gray-400" />
              </div>
              
              <div className="px-6 py-8 flex flex-col items-center">
                {/* Breathing UI */}
                <div className="w-64 h-64 rounded-full bg-coral-50 flex items-center justify-center mb-8">
                  <div className="w-48 h-48 rounded-full bg-[#FADCD9] flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-[#F6C8C4] flex flex-col items-center justify-center shadow-sm">
                      <span className="font-serif font-bold text-coral-900">Box Breathing</span>
                      <span className="text-sm text-coral-800">3:00</span>
                    </div>
                  </div>
                </div>
                
                <button className="bg-coral-100 text-coral-900 font-bold px-6 py-3 rounded-xl mb-10 hover:bg-[#F6C8C4] transition">
                  Begin 3-min session
                </button>

                <div className="w-full">
                  <h5 className="font-bold text-slate-800 mb-3">5-Minute Cognitive Offload Journal</h5>
                  <textarea 
                    className="w-full bg-[#FAFAFA] border border-gray-200 rounded-3xl p-6 h-32 text-sm focus:outline-none focus:ring-2 focus:ring-coral-100 resize-none"
                    placeholder="Empty the mental tabs here. No one is grading this."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* EXERCISE PANE */}
            <div className="bg-white rounded-[2rem] border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-6 flex justify-between items-center cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400"><Dumbbell size={24}/></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">Exercise</h4>
                    <p className="text-sm text-slate-400">Complete 2 of 5 low-impact routines</p>
                  </div>
                </div>
                <ChevronUp className="text-gray-400" />
              </div>
              <div className="px-6 pb-6">
                <p className="text-sm text-slate-500 mb-4">0/2 needed to win this pillar.</p>
                <div className="space-y-3">
                  {['Post-Meal Stroll', 'Cortisol-Drop Yoga Flow', '10 Squats', '15 Heel Raises', '5-Min Endorphin Booster'].map((item, i) => (
                    <div key={i} className="border border-gray-100 rounded-full p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50">
                      <Circle className="text-gray-200" size={20} />
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SLEEP PANE */}
            <div className="bg-white rounded-[2rem] border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-6 flex justify-between items-center cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400"><Moon size={24}/></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">Sleep</h4>
                    <p className="text-sm text-slate-400">Friction reduction for an easy tomorrow</p>
                  </div>
                </div>
                <ChevronUp className="text-gray-400" />
              </div>
              <div className="px-6 pb-6">
                <p className="text-sm text-slate-500 mb-4">Check off 3+ next-day prep tasks to win this pillar.</p>
                <div className="space-y-3">
                  {['Prep protein breakfast', 'Dim the lights', 'Clear meditation floor space'].map((item, i) => (
                    <div key={i} className="border border-gray-100 rounded-full p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50">
                      <Circle className="text-gray-200" size={20} />
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* PMOS LITERACY SECTION */}
          <div className="mb-12">
            <h3 className="text-2xl font-serif text-slate-800 mb-2 font-bold">Reproductive Health & PMOS Literacy</h3>
            <p className="text-slate-500 mb-6">Swipe through the facts and myth-busters.</p>
            
            <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
              
              <div className="min-w-[300px] border border-gray-200 bg-white rounded-3xl p-6">
                <span className="inline-block bg-coral-50 text-coral-800 text-xs font-medium px-3 py-1 rounded-full mb-4">Myth-Buster</span>
                <h4 className="font-serif font-bold text-slate-800 text-lg mb-3">PMOS is not caused by eating too much sugar</h4>
                <p className="text-slate-500 text-sm leading-relaxed">PMOS is a complex hormonal and metabolic pattern. Insulin resistance can drive cravings — the cravings are a symptom, not a moral failing.</p>
              </div>

              <div className="min-w-[300px] border border-gray-200 bg-white rounded-3xl p-6">
                <span className="inline-block bg-coral-50 text-coral-800 text-xs font-medium px-3 py-1 rounded-full mb-4">Medical Fact</span>
                <h4 className="font-serif font-bold text-slate-800 text-lg mb-3">Insulin resistance is central, not optional</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Up to 70% of people with PMOS experience insulin resistance, which is why protein-first meals and post-meal movement help so much.</p>
              </div>

              <div className="min-w-[300px] border border-gray-200 bg-white rounded-3xl p-6">
                <span className="inline-block bg-coral-50 text-coral-800 text-xs font-medium px-3 py-1 rounded-full mb-4">Cycle Literacy</span>
                <h4 className="font-serif font-bold text-slate-800 text-lg mb-3">Irregular cycles deserve real answers</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Skipped or unpredictable cycles are data, not drama. Tracking them gives your clinician a clearer picture faster.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, title }) {
  return (
    <div className="flex items-center gap-3 px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg cursor-pointer transition">
      {icon}
      <span>{title}</span>
    </div>
  );
}