export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export const handleNavigation = (href: string) => {
  if (href.startsWith('#')) {
    // If we're already on the home page
    if (window.location.pathname === '/') {
      scrollToSection(href.substring(1));
    } else {
      // If we're on another page, navigate to home and then scroll
      window.location.href = `/${href}`;
    }
  } else {
    // For non-section links (like /blog), just navigate normally
    window.location.href = href;
  }
};
