import { SetStepNav } from '@payloadcms/ui/elements/StepNav'
import { notFound } from 'next/navigation.js'
import React, { Fragment } from 'react'

import type { ServerSideEditViewProps } from '../../../../../packages/payload/types.js'

import { customNestedTabViewTitle } from '../../../shared.js'

export const CustomNestedTabView: React.FC<ServerSideEditViewProps> = ({ initPageResult }) => {
  if (!initPageResult) {
    notFound()
  }

  return (
    <Fragment>
      <SetStepNav
        nav={[
          {
            label: 'Custom Nested View',
          },
        ]}
      />
      <div
        style={{
          marginTop: 'calc(var(--base) * 2)',
          paddingLeft: 'var(--gutter-h)',
          paddingRight: 'var(--gutter-h)',
        }}
      >
        <h1 id="custom-view-title">{customNestedTabViewTitle}</h1>
        <p>This custom view was added through the Payload config:</p>
        <ul>
          <li>
            <code>components.views[key].Component</code>
          </li>
        </ul>
      </div>
    </Fragment>
  )
}
