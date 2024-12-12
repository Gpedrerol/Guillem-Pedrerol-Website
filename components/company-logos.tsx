import Image from 'next/image';
import { Marquee } from '@/components/ui/marquee';

const companies = [
  {
    name: "Asuni",
    logo: "/images/Asuni.png",
    height: 50,
    width: 160
  },
  {
    name: "Ditesa",
    logo: "/images/Ditesa Logo.png",
    height: 50,
    width: 150
  },
  {
    name: "Icreatia",
    logo: "/images/Icreatia Logo.png",
    height: 50,
    width: 160
  },
  {
    name: "One Putt Colombia",
    logo: "/images/One Putt Colombia Logo.png",
    height: 50,
    width: 170
  },
  {
    name: "PL Bienes Raices",
    logo: "/images/PL Bienes Raices logo.png",
    height: 50,
    width: 150
  },
  {
    name: "Rhino3D",
    logo: "/images/Rhino3d.png",
    height: 50,
    width: 160
  },
  {
    name: "Rhino Lands",
    logo: "/images/rhinloands logo.png",
    height: 50,
    width: 170
  },
  {
    name: "Tennis Express",
    logo: "/images/Tennis Express Logo.png",
    height: 50,
    width: 170
  },
  {
    name: "VisualArq",
    logo: "/images/VisualArq logo.png",
    height: 50,
    width: 160
  }
];

export function CompanyLogos() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mb-8">
        <p className="text-center text-muted-foreground">Trusted by innovative companies</p>
      </div>
      <Marquee className="py-4" speed="slow">
        {companies.map((company, index) => (
          <div 
            key={index} 
            className="mx-10 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            style={{
              minWidth: `${company.width}px`,
              height: `${company.height}px`
            }}
          >
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={company.width}
              height={company.height}
              className="object-contain w-full h-full"
              style={{
                maxWidth: `${company.width}px`,
                maxHeight: `${company.height}px`
              }}
              priority
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
