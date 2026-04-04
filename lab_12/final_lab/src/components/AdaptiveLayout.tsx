import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, Platform } from 'react-native';

export function AdaptiveLayout({ header, content, footer }: any) {
  const { width, height } = useWindowDimensions();
  const isTablet = width >= 768;
  const isLandscape = width > height;

  return (
    <View style={styles.container}>
      {header}
      <ScrollView 
        style={styles.main} 
        contentContainerStyle={[
          styles.scrollContent,
          isTablet && styles.scrollContentTablet
        ]}
      >
        <View style={isTablet ? styles.tabletLayout : styles.phoneLayout}>
          {content}
        </View>
      </ScrollView>
      {footer}
    </View>
  );
}

export function FeatureCard({ icon, title, description }: any) {
  return (
    <View style={styles.featureCard}>
      <Text style={styles.featureIcon}>{icon}</Text>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  main: { flex: 1 },
  scrollContent: { padding: 16 },
  scrollContentTablet: { padding: 24 },
  phoneLayout: { flexDirection: 'column' },
  tabletLayout: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  featureCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    width: Platform.OS === 'web' || useWindowDimensions().width >= 768 ? '48%' : '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 3,
  },
  featureIcon: { fontSize: 32, marginBottom: 12 },
  featureTitle: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  featureDescription: { fontSize: 14, color: '#666', lineHeight: 20 },
});