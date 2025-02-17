// Copyright (c) 2017 Uber Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as React from 'react';

import './TimelineRow.css';

type TTimelineRowProps = {
  children: React.ReactNode;
  className?: string;
};

interface ITimelineRowCellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  width: number;
  style?: object;
}

export default function TimelineRow({ children, className = '', ...rest }: TTimelineRowProps) {
  return (
    <div className={`flex-row ${className}`} {...rest}>
      {children}
    </div>
  );
}

function TimelineRowCell({ children, className = '', width, style = {}, ...rest }: ITimelineRowCellProps) {
  const widthPercent = `${width * 100}%`;
  const mergedStyle = { ...style, flexBasis: widthPercent, maxWidth: widthPercent };
  return (
    <div className={`ub-relative ${className}`} style={mergedStyle} {...rest}>
      {children}
    </div>
  );
}

TimelineRow.Cell = TimelineRowCell;
