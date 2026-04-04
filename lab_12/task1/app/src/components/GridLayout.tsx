import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

interface GridLayoutProps {
  children: React.ReactNode;
  columns?: number;
  spacing?: number;
}

export function GridLayout({ children, columns = 2, spacing = 12 }: GridLayoutProps) {
  const { width } = useWindowDimensions();
  
  const itemWidth = (width - spacing * (columns + 1)) / columns;
  const items = React.Children.toArray(children);
  const rows: React.ReactNode[][] = [];

  for (let i = 0; i < items.length; i += columns) {
    rows.push(items.slice(i, i + columns));
  }

  return (
    <View style={styles.container}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={[styles.row, { marginBottom: spacing }]}>
          {row.map((item, colIndex) => (
            <View 
              key={colIndex} 
              style={[
                styles.item, 
                { width: itemWidth, marginLeft: spacing }
              ]}
            >
              {item}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

export function Card({ title, subtitle, children }: { title: string; subtitle?: string; children?: React.ReactNode }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      {subtitle && <Text style={styles.cardSubtitle}>{subtitle}</Text>}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingRight: 12 },
  row: { flexDirection: 'row', justifyContent: 'flex-start' },
  item: { flex: 0 }, 
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#333', marginBottom: 4 },
  cardSubtitle: { fontSize: 13, color: '#666', marginBottom: 8 },
});