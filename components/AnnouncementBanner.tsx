import Link from "next/link";

const AnnouncementBanner = () => {
  return (
    <Link 
      href="/visit-our-club" 
      className="block bg-gradient-loyal-blissful text-white py-3 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all cursor-pointer"
      aria-label="Visit our club - Thursday Meetings, 7:00 PM - 8:30 PM"
      title="Thursday Meetings, 7:00 PM - 8:30 PM"
    >
      <div className="container max-w-7xl px-8 mx-auto flex flex-row items-center justify-center gap-3 md:gap-6 text-center sm:text-left">
        {/* Badge */}
        <div className="flex-shrink-0">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-happy-yellow/80 text-loyal-blue text-xs sm:text-sm font-bold">
            Announcement
          </span>
        </div>

        {/* Meeting Information */}
        <div className="flex-grow">
          <p className="text-xs sm:text-base font-medium text-white/90">
            Thursday Meetings, <time dateTime="19:00">7:00 PM</time> - <time dateTime="20:30">8:30 PM</time>
            <span className="hidden md:inline">, Woodland Hills, CA</span>
          </p>
        </div>

        {/* Arrow Icon */}
        <div className="flex-shrink-0">
          <div className="hidden lg:inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white/90">
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AnnouncementBanner;
