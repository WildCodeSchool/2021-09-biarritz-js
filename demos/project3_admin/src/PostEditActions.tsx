import ChevronLeft from '@material-ui/icons/ChevronLeft';
import React from 'react';
import { ListButton, ShowButton, TopToolbar } from 'react-admin';

interface PostEditActions {
  basePath?: string;
}

export const PostEditActions: React.FC<PostEditActions> = ({ basePath }) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Back" icon={<ChevronLeft />} />
  </TopToolbar>
);
