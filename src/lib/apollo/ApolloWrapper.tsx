"use client";

import React, { ReactNode } from 'react';
import {
  ApolloNextAppProvider,

} from "@apollo/experimental-nextjs-app-support/ssr";
import { apolloClient } from '@/lib/apollo/client';

type ApolloProviderProps = {
  children: ReactNode;
}

export const ApolloWrapper: React.FC<ApolloProviderProps> = ({children})=>{
  return <ApolloNextAppProvider makeClient={apolloClient}>{children}</ApolloNextAppProvider>
}