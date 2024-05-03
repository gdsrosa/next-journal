import {
  ClerkMiddlewareAuth,
  clerkMiddleware,
  createRouteMatcher,
} from '@clerk/nextjs/server';
import { NextRequest } from 'next/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/journal']);

const handler = (auth: ClerkMiddlewareAuth, req: NextRequest) => {
  if (isProtectedRoute(req)) auth().protect();
};

export default clerkMiddleware(handler);

export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
