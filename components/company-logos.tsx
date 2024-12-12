import Image from 'next/image';
import { Marquee } from '@/components/ui/marquee';
import Link from 'next/link';

const companies = [
  {
    name: "Asuni",
    logo: "/images/Asuni.png",
    height: 50,
    width: 160,
    url: "https://www.asuni.com/"
  },
  {
    name: "Ditesa",
    logo: "/images/Ditesa Logo.png",
    height: 50,
    width: 150,
    url: "https://www.grupoditesa.com.mx/"
  },
  {
    name: "Icreatia",
    logo: "/images/Icreatia Logo.png",
    height: 50,
    width: 160,
    url: "https://www.icreatia.es/"
  },
  {
    name: "One Putt Colombia",
    logo: "/images/One Putt Colombia Logo.png",
    height: 50,
    width: 170,
    url: "https://oneputtcolombia.com/"
  },
  {
    name: "PL Bienes Raices",
    logo: "/images/PL Bienes Raices logo.png",
    height: 50,
    width: 150,
    url: "https://plbienesraices.com/"
  },
  {
    name: "Rhino3D",
    logo: "/images/Rhinoceros3d logo.png",
    height: 50,
    width: 160,
    url: "https://www.rhino3d.com/"
  },
  {
    name: "Rhino Lands",
    logo: "/images/rhinloands logo.png",
    height: 50,
    width: 170,
    url: "https://rhinolands.com/"
  },
  {
    name: "Tennis Express",
    logo: "/images/TennisExpress logo.png",
    height: 50,
    width: 170,
    url: "https://tennisexpress.mx/"
  },
  {
    name: "VisualArq",
    logo: "/images/VisualARQ complete logo.png",
    height: 50,
    width: 160,
    url: "https://www.visualarq.com/"
  }
];

export function CompanyLogos() {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Trusted by Innovative Companies</h2>
      </div>
      <Marquee className="py-8" speed="slow">
        {companies.map((company, index) => (
          <Link
            key={index}
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-10 flex items-center justify-center hover:scale-105 transition-transform duration-200"
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
          </Link>
        ))}
      </Marquee>
    </section>
  );
}
