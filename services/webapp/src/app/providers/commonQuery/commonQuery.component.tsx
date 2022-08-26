import React, { FunctionComponent, PropsWithChildren, useEffect } from 'react';
import { graphql } from 'react-relay';

import { useUnsuspendedQueryLoader } from '../../../shared/hooks/useUnsuspendedQueryLoader/useUnsuspendedQueryLoader';
import currentUserQuery, {
  commonQueryCurrentUserQuery,
} from '../../../__generated__/commonQueryCurrentUserQuery.graphql';
import commonDataContext from './commonQuery.context';

export const CommonQuery: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [isCurrentUserQueryLoading, currentUserQueryRef, loadCurrentUserQuery] =
    useUnsuspendedQueryLoader<commonQueryCurrentUserQuery>(graphql`
      query commonQueryCurrentUserQuery {
        currentUser {
          id
          email
          firstName
          lastName
          roles
          avatar
        }
      }
    `);

  useEffect(() => {
    loadCurrentUserQuery({});
  }, [loadCurrentUserQuery]);

  if (!currentUserQueryRef || isCurrentUserQueryLoading) {
    return null;
  }

  const reload = () => {
    loadCurrentUserQuery({}, { fetchPolicy: 'network-only' });
  };

  return (
    <commonDataContext.Provider
      value={{
        currentUserQueryRef,
        currentUserQuery,
        reload,
      }}
    >
      {children}
    </commonDataContext.Provider>
  );
};
