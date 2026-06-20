import React from 'react';
import { Apple, Brain, Dumbbell, Moon, Circle, ChevronUp, Bell } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FCFBF9] p-8 lg:p-12 text-slate-800">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="mb-10">
          <p className="text-[#B85C53] font-semibold tracking-widest text-xs uppercase mb-3">Saboo's Life OS Dashboard</p>
          <h2 className="text-4xl font-serif mb-4">Welcome back to your sanctuary</h2>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">Small, kind actions across four pillars. Light up two to feel the shift, four to feel unstoppable.</p>
        </header>

        {/* Master Tracker */}
        <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-sm mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold font-serif">Master Tracker</h2>
            <span className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-medium">0/4 wins</span>
          </div>
          <div className="h-3 w-full bg-gray-100 rounded-full mb-8"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Nutrition', 'Mental Health', 'Exercise', 'Sleep'].map((item) => (
              <div key={item} className="border border-gray-200 rounded-3xl p-6 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 mb-4">
                  {item === 'Nutrition' ? <Apple size={20}/> : item === 'Mental Health' ? <Brain size={20}/> : item === 'Exercise' ? <Dumbbell size={20}/> : <Moon size={20}/>}
                </div>
                <h4 className="text-sm font-bold">{item}</h4>
                <p className="text-xs mt-1 text-slate-400">In progress</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Pane Example */}
        <div className="bg-white rounded-[2rem] border border-gray-200 shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400"><Apple size={24}/></div>
              <div>
                <h4 className="font-bold text-lg">Nutrition</h4>
                <p className="text-sm text-slate-400">Post-meal stroll + protein-first breakfast</p>
              </div>
            </div>
            <ChevronUp className="text-gray-400" />
          </div>
          <div className="space-y-3">
             <div className="border border-gray-100 rounded-2xl p-4 flex items-center gap-4">
                <Circle className="text-gray-200" size={24} />
                <p className="text-sm font-medium">10-Min Post-Meal Stroll</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}