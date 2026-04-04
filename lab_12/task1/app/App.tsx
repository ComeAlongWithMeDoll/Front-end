import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ResponsiveHeader } from './src/components/ResponsiveHeader';
import { AdaptiveLayout, FeatureCard } from './src/components/AdaptiveLayout';
import { GridLayout, Card } from './src/components/GridLayout';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ResponsiveHeader 
          title="Lab 12: Adaptive App" 
          leftAction={{ icon: "☰", onPress: () => console.log('Menu') }}
          rightAction={{ icon: "👤", onPress: () => console.log('Profile') }}
        />

        <AdaptiveLayout 
          content={
            <View>
              <Text style={styles.sectionTitle}>Features (Task 3):</Text>
              <FeatureCard 
                icon="🚀" 
                title="Fast Performance" 
                description="This layout adjusts to any screen size using Flexbox."
              />
              <FeatureCard 
                icon="📱" 
                title="Responsive Design" 
                description="Try rotating your device to see the magic!"
                variant="secondary"
              />

              <Text style={styles.sectionTitle}>Grid System (Task 1):</Text>
              <GridLayout columns={2} spacing={10}>
                <Card title="Item 1" subtitle="Description A" />
                <Card title="Item 2" subtitle="Description B" />
                <Card title="Item 3" subtitle="Description C" />
                <Card title="Item 4" subtitle="Description D" />
              </GridLayout>
            </View>
          }
          footer={
            <View style={styles.footer}>
              <Text>© 2026 Mobile App Development Lab</Text>
            </View>
          }
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#333',
  },
  footer: {
    padding: 15,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
});