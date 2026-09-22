import React from 'react';

import './assets/index.scss';

type Props = {
  /** Show the "Loading tracks…" card over the page instead of a plain spinner. */
  overlay?: boolean;
};

export const Loader: React.FC<Props> = ({ overlay = false }) =>
  overlay ? (
    <div className="loader_overlay" role="status" aria-live="polite">
      <div className="loader_overlay__card">
        <span className="loader__spinner" />
        <p className="loader_overlay__title">Loading tracks...</p>
        <p className="loader_overlay__text">
          Please wait while we fetch the best
          <br />
          travel trucks for you
        </p>
      </div>
    </div>
  ) : (
    <div className="loader" role="status" aria-label="Loading">
      <span className="loader__spinner" />
    </div>
  );
