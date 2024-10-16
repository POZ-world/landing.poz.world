import { SimpleCard } from '@shlinkio/shlink-frontend-kit';
import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

type NotFoundProps = PropsWithChildren<{ to?: string }>;

export const NotFound: FC<NotFoundProps> = ({ to = '/', children = 'Home' }) => (
  <div className="home">
    <SimpleCard className="p-4">
      <h2>The shit you're looking for doesn't fucking exist!</h2>
      <p>
        Use your browser&apos;s back button to navigate to the page you have previously come from, or just press this
        button.
      </p>
      <br />
      <Link to={to} className="btn btn-outline-primary btn-lg">{children}</Link>
    </SimpleCard>
  </div>
);
