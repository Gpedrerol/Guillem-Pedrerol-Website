'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

interface CodeDemoProps {
  code: string;
  children: React.ReactNode;
}

const CodeDemo = ({ code, children }: CodeDemoProps) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  
  const toggleCode = () => setIsCodeVisible(!isCodeVisible);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleCode();
    }
  };

  return (
    <div className="demo-container">
      <div className="demo-content">{children}</div>
      <button
        onClick={toggleCode}
        onKeyDown={handleKeyDown}
        aria-expanded={isCodeVisible}
        aria-label={`${isCodeVisible ? 'Ocultar' : 'Mostrar'} código del ejemplo`}
        role="button"
        tabIndex={0}
        className="demo-toggle-button"
      >
        {isCodeVisible ? 'Ocultar código' : 'Mostrar código'}
      </button>
      {isCodeVisible && (
        <pre 
          className="demo-code"
          tabIndex={0}
          aria-live="polite"
          role="region"
        >
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
};

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Interactive 3D
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
            that capture attention and enhance your design.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
