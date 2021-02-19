/**
 *
 * ImageGallery
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Image } from '../../../api/types/image';
import { useState } from 'react';
import { sizes } from '../../../styles/media';

interface Props {
  images: Image[];
}

const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 8px;
  grid-column-gap: 20px;
  height: 100%;
  grid-template-columns: minmax(100px, 350px);

  @media only screen and (min-width: ${sizes.large}px) {
    grid-template-columns: minmax(110px, 200px) minmax(100px, 350px);
  }
`;

const Img = styled.img`
  height: 100px;
  border: ${(props: { active: boolean }) =>
    props.active ? 'crimson 1px solid' : 'none'};
  padding: 4px;
  cursor: pointer;
`;

const ImgList = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-template-rows: auto;
  height: 100%;

  @media only screen and (min-width: ${sizes.large}px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 100px);
  }
`;

const SelectImgWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SelectedImg = styled.img`
  max-width: 332px;
  max-height: 332px;
`;

export const ImageGallery = ({ images }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Container>
      <ImgList>
        {images.map((image, index) => (
          <Img
            key={image.id}
            onClick={() => setSelectedIndex(index)}
            active={index === selectedIndex}
            src={image.image.productLarge}
          />
        ))}
      </ImgList>
      <SelectImgWrapper>
        <SelectedImg src={images[selectedIndex]?.image?.productLarge} />
      </SelectImgWrapper>
    </Container>
  );
};
