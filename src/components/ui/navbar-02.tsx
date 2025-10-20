'use client';
import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { BookOpenIcon, InfoIcon, LifeBuoyIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose, DialogDescription } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';
import { MagneticButton } from '@/components/ui/magnetic-button';

// Simple logo component for the navbar
const Logo = ({ className, style, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    src="/logo.png"
    alt="Logo"
    className={cn('inline-block', className)}
    {...props}
  />
);

// Hamburger icon component
const HamburgerIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn('pointer-events-none', className)}
    width="72" // Wider to accommodate longer lines
    height="63" // Matches CONTACT US button height on mobile
    viewBox="0 0 54 48" // Adjusted to allow longer lines
    fill="none"
    stroke="currentColor"
    strokeWidth="3" // Thinner lines
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 8H51" // Moved from y=6 to y=4
      className="transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]"
    />
    <path
      d="M2 24H51" // Unchanged y=12 (center)
      className="transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]"
    />
    <path
      d="M2 40H51" // Moved from y=18 to y=20
      className="transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]"
    />
  </svg>
);

// Types
export interface Navbar02NavItem {
  href?: string;
  label: string;
  submenu?: boolean;
  type?: 'description' | 'simple' | 'icon';
  items?: Array<{
    href: string;
    label: string;
    description?: string;
    icon?: string;
  }>;
}

export interface Navbar02Props extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: Navbar02NavItem[];
  aboutText?: string;
  aboutHref?: string;
  ctaText?: string;
  ctaHref?: string;
  onSignInClick?: () => void;
  onCtaClick?: () => void;
}

// Default navigation links
const defaultNavigationLinks: Navbar02NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '#aboutmindsheeplabs', label: 'About Us' },
];

// Navbar component
export const Navbar02 = React.forwardRef<HTMLElement, Navbar02Props>(
  (
    {
      className,
      logo = <Logo />,
      logoHref = '#',
      navigationLinks = defaultNavigationLinks,
      aboutText = 'ABOUT',
      aboutHref = '#signin',
      ctaText = 'CONTACT US',
      ctaHref = '#get-started',
      onSignInClick,
      onCtaClick,
      ...props
    },
    ref
  ) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768); // 768px is md breakpoint
        }
      };
      checkWidth();
      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }
      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    // Combine refs
    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        containerRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );

    const renderIcon = (iconName: string) => {
      switch (iconName) {
        case 'BookOpenIcon':
          return <BookOpenIcon size={16} className="text-foreground opacity-60" aria-hidden={true} />;
        case 'LifeBuoyIcon':
          return <LifeBuoyIcon size={16} className="text-foreground opacity-60" aria-hidden={true} />;
        case 'InfoIcon':
          return <InfoIcon size={16} className="text-foreground opacity-60" aria-hidden={true} />;
        default:
          return null;
      }
    };

    return (
      <header
        ref={combinedRef}
        className={cn(
          'pt-4 md:pt-10 top-0 left-0 z-50 w-full md:px-10 px-6 [&_*]:no-underline transition-all duration-500',
          className
        )}
        {...props}
      >
        <div className="flex justify-between items-center w-full gap-4 mx-auto md:px-20 py-2 md:py-4 min-h-[64px]">
          {/* Left side */}
          <div className="flex items-center gap-2">
            {/* Main nav */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-1 space-x-2 transition-colors cursor-pointer md:gap-4 text-primary hover:text-primary/90"
              >
                <div className="text-2xl">
                  <Logo className="w-[35px] h-[35px] md:w-[55px] md:h-[55px]" />
                </div>
                <span className="text-[20px] md:text-[30px] uppercase text-white font-bold leading-none">
                  MindsheepLabs
                </span>
              </button>
            </div>
          </div>
          {/* Right side */}
          <div className="flex items-center justify-end gap-2 md:gap-6">
            <a
              href="#aboutmindsheeplabs"
              // variant="ghost"
              // size="sm"
              className="text-sm hidden md:flex font-medium font-roboto text-[25px]"
            >
              {aboutText}
            </a>
            {/* <a
              // size="sm"
              className="flex items-center justify-items-center md:rounded-[15px] rounded-[5px] font-roboto md:text-[25px] text-[13px] font-normal px-4 shadow-sm bg-gradient-to-r from-[#1A00D7] to-[#D700F3] md:h-[57px] md:w-[191px] w-[85px] h-[33px]"
              onClick={(e) => {
                e.preventDefault();
                if (onCtaClick) onCtaClick();
              }}
            >
              {ctaText}
            </a> */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                  <MagneticButton
                    onClick={(e) => {
                      e.preventDefault();
                      setIsDialogOpen(true);
                    }}
                    className="flex cursor-pointer items-center justify-center 
                      md:rounded-[15px] rounded-[5px] font-roboto 
                      md:text-[25px] text-[13px] font-normal px-4 
                      shadow-sm bg-gradient-to-r from-[#1A00D7] to-[#D700F3] 
                      md:h-[60px] md:w-[190px] w-[100px] h-[33px] 
                      shrink-0 whitespace-nowrap"
                  >
                    <span className="inline-block px-1">{ctaText}</span>
                  </MagneticButton>
              </DialogTrigger>

              <DialogContent className="z-1010 w-[90vw] max-w-md sm:max-w-lg mx-auto bg-white rounded-xl p-6 shadow-lg">
                <DialogHeader className="space-y-2 text-center">
                  <DialogTitle className="text-2xl font-bold text-black">
                    Join Mindsheep Labs
                  </DialogTitle>
                  <DialogDescription className="text-sm leading-relaxed text-gray-700">
                    We collaborate with agencies ready to rewire how they create, automate,
                    and scale using AI. Tell us a bit about your goals so we can explore the
                    right fit.
                  </DialogDescription>
                </DialogHeader>

                <form className="flex flex-col w-full gap-4 mt-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D700F3] outline-none transition"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D700F3] outline-none transition"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Your Agency / Company Name"
                    className="w-full p-3 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D700F3] outline-none transition"
                  />

                  <select
                    className="w-full p-3 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D700F3] outline-none transition"
                    required
                  >
                    <option value="">What do you want to explore?</option>
                    <option>Creative Automation (AI imagery, videos, influencers)</option>
                    <option>Operational AI (proposal writing, workflows, reports)</option>
                    <option>Data & Stack Integration (Google Ads, CRM, Meta)</option>
                    <option>AI-Powered Service Expansion</option>
                    <option>Other / Not Sure Yet</option>
                  </select>

                  <textarea
                    placeholder="Tell us what challenges or goals you’re exploring with AI..."
                    className="w-full p-3 text-black border border-gray-300 rounded-md h-28 resize-none focus:ring-2 focus:ring-[#D700F3] outline-none transition"
                  ></textarea>

                  <DialogFooter className="flex flex-col-reverse justify-end gap-3 mt-4 sm:flex-row">
                    <DialogClose asChild>
                      <Button
                        variant="outline"
                        className="w-full px-6 py-2 text-black transition border border-gray-300 rounded-md cursor-pointer sm:w-auto hover:bg-gray-100"
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-2 text-white bg-gradient-to-r from-[#1A00D7] to-[#D700F3] rounded-md font-semibold cursor-pointer transition"
                    >
                      Submit
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>

            </Dialog>
            {/* Mobile menu trigger */}
            {/* Mobile menu trigger */}
            {isMobile && (
              <Dialog open={menuOpen} onOpenChange={setMenuOpen}>
                <DialogTrigger asChild>
                  <button
                    className="group h-[40px] w-[33px] md:hidden flex items-center justify-center"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    {menuOpen ? (
                      // “X” icon when menu is open
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    ) : (
                      <HamburgerIcon className="h-[24px] w-[24px]" />
                    )}
                  </button>
                </DialogTrigger>

                <DialogContent
                  className="fixed z-[1010] w-screen h-screen p-0 m-0 bg-gradient-to-br from-[#011d53] to-[#070029] text-white overflow-y-auto"
                >
                  {/* Screen reader only title */}
                  <DialogHeader className="sr-only">
                    <DialogTitle>Navigate Mindsheep Labs</DialogTitle>
                  </DialogHeader>
                  {/* Close button */}
                  {/* <div className="absolute top-4 right-4">
                    <button
                      className="p-2 text-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div> */}

                  {/* Mobile nav items */}
                  <nav className="flex flex-col items-start gap-4 px-6 mt-20">
                    {navigationLinks.map((link, index) => (
                      <div key={index} className="w-full">
                        {link.submenu ? (
                          <div>
                            <div className="mb-1 text-sm font-medium text-muted-foreground">{link.label}</div>
                            <ul className="flex flex-col gap-2">
                              {link.items?.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <a
                                    href={item.href}
                                    className="block w-full px-4 py-2 rounded-md hover:bg-white/10"
                                  >
                                    {item.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <a
                            href={link.href}
                            className="block w-full px-4 py-2 text-lg font-medium rounded-md hover:bg-white/10"
                          >
                            {link.label}
                          </a>
                        )}
                      </div>
                    ))}
                  </nav>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </header>
    );
  }
);

Navbar02.displayName = 'Navbar02';

// ListItem component for navigation menu items
const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & {
    title: string;
    href?: string;
    icon?: string;
    type?: 'description' | 'simple' | 'icon';
    children?: React.ReactNode;
  }
>(({ className, title, children, icon, type, ...props }, ref) => {
  const renderIconComponent = (iconName?: string) => {
    if (!iconName) return null;
    switch (iconName) {
      case 'BookOpenIcon':
        return <BookOpenIcon className="w-5 h-5" />;
      case 'LifeBuoyIcon':
        return <LifeBuoyIcon className="w-5 h-5" />;
      case 'InfoIcon':
        return <InfoIcon className="w-5 h-5" />;
      default:
        return null;
    }
  };
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        onClick={(e) => e.preventDefault()}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer',
          className
        )}
        {...props}
      >
        {type === 'icon' && icon ? (
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-muted">
              {renderIconComponent(icon)}
            </div>
            <div className="space-y-1">
              <div className="text-base font-medium leading-tight">{title}</div>
              {children && (
                <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                  {children}
                </p>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="text-base font-medium leading-none">{title}</div>
            {children && (
              <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                {children}
              </p>
            )}
          </>
        )}
      </a>
    </NavigationMenuLink>
  );
});

ListItem.displayName = 'ListItem';

export { Logo, HamburgerIcon };