/**
 *
 * ReviewItem
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Review } from '../../../api/types/review';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { Images } from '../../../images';
import { Rating } from '@material-ui/lab';

interface Props {
  review: Review;
}

const OwnerAvatar = styled(Avatar)`
  height: 30px;
  width: 30px;
`;

const RatingWrapper = styled.div`
  flex-direction: column;
`;

export const ReviewItem = memo(
  ({ review: { createDate, owner, rating, title } }: Props) => {
    return (
      <ListItem>
        <ListItemAvatar>
          <OwnerAvatar src={owner.image ?? Images.userPlaceHolder} />
        </ListItemAvatar>
        <ListItemText primary={owner.fullName} />
        <RatingWrapper>
          <Typography variant={'caption'}>{createDate}</Typography>
          <Rating value={rating} size="large" readOnly={true} />
          <Typography variant={'body1'}>{title}</Typography>
        </RatingWrapper>
      </ListItem>
    );
  },
  ({ review: oldReview }, { review: newReview }) =>
    oldReview.id === newReview.id,
);
