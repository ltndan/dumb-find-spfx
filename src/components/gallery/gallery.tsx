import React from 'react';
import { IItem } from '../../interfaces/item';
import styles from './gallery.module.scss';

interface IGalleryProps {
  items: IItem[];
}

export const Gallery = (props: IGalleryProps) => (
  <section className={styles.container}>
    {props.items.map(x => (
      <article>
        <img src={x.imageUrl} />
        <label>{x.title}</label>
      </article>
    ))}
  </section>
);
