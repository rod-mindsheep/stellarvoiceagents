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
import { cn } from '@/lib/utils';

// TypeScript declaration to inform the compiler about the existence of the Calendly object on the global window.
// This resolves the "Property 'Calendly' does not exist on type 'Window & typeof globalThis'" error.
declare global {
    interface Window {
        Calendly: {
            initPopupWidget: (options: { url: string }) => void;
        };
    }
}

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
      aboutText = 'CONTACT US',
      aboutHref = '#contactus',
      ctaText = 'BOOK A DEMO',
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

    // 1. Dynamically load the Calendly widget script and CSS on component mount.
    useEffect(() => {
        // Load Calendly CSS
        const link = document.createElement('link');
        link.href = 'https://assets.calendly.com/assets/external/widget.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // Load Calendly JS
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        // Cleanup function to remove the added elements when the component unmounts
        return () => {
            document.head.removeChild(link);
            document.body.removeChild(script);
        };
    }, []);

    // 2. Function to open the Calendly pop-up
    const handleOpenModal = () => {
        // Check if the Calendly global object is available
        if (window.Calendly) {
            // Use the official initPopupWidget method to show the scheduling window
            window.Calendly.initPopupWidget({ url: 'https://calendly.com/garysarco1' });
        } else {
            console.error("Calendly script not yet loaded. Opening direct link as fallback.");
            // Fallback: open the direct link in a new tab if the script failed to load
            window.open('https://calendly.com/garysarco1', '_blank');
        }
    };

    return (
      <header
        ref={combinedRef}
        className={cn(
          'py-4 md:pt-2 md:mt-10 top-0 left-0 z-50 w-full md:w-[90vw] [&_*]:no-underline transition-all duration-500 bg-white md:rounded-tl-[40px] md:rounded-tr-[40px]',
          className
        )}
        {...props}
      >
        <div className="flex justify-between items-center w-full gap-4 mx-auto md:px-20 py-2 md:py-4 min-h-[64px]">
          {/* Left side */}
          <div className="flex items-center gap-2">
            {/* Main nav */}
            <div className="flex items-center gap-2 justify-items-center shrink-0">
              <button
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-1 space-x-2 transition-colors cursor-pointer md:gap-4 text-primary hover:text-primary/90"
              >
                <div className="text-2xl">
                  <Logo className="ml-[30px] md:ml-0 w-[145px] h-[43px] md:w-[256px] md:h-[71px]" />
                </div>
              </button>
            </div>
          </div>
          {/* Right side */}
          <div className="items-center justify-end hidden gap-2 md:flex justify-items-center md:gap-6">
            <a
              href="#aboutmindsheeplabs"
              // variant="ghost"
              // size="sm"
              className="text-sm font-extrabold hidden md:flex font-proxima text-[25px] text-[#25005D]"
            >
              {aboutText}
            </a>
            <a
              onClick={handleOpenModal}
              // size="sm"
              className="text-white cursor-pointer font-black flex items-center justify-items-center md:rounded-[15px] rounded-[5px] font-proxima md:text-[20px] text-[13px] px-[25px] py-[10px] shadow-sm bg-[#25005D]"
            >
              {ctaText}
            </a>
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
