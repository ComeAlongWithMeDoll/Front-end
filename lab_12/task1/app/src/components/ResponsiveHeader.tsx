import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ResponsiveHeaderProps {
  title: string;
  leftAction?: { icon: string; onPress: () => void };
  rightAction?: { icon: string; onPress: () => void };
}

export function ResponsiveHeader({ title, leftAction, rightAction }: ResponsiveHeaderProps) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <View style={[styles.safeArea, { paddingTop: insets.top }]}>
      <View style={styles.headerContent}>
        <View style={styles.headerLeft}>
          {leftAction && (
            <TouchableOpacity onPress={leftAction.onPress} style={styles.headerButton}>
              <Text style={styles.headerIcon}>{leftAction.icon}</Text>
            </TouchableOpacity>
          )}
        </View>
        
        <View style={styles.headerCenter}>
          <Text style={[styles.headerTitle, isTablet && styles.headerTitleTablet]}>
            {title}
          </Text>
        </View>

        <View style={styles.headerRight}>
          {rightAction && (
            <TouchableOpacity onPress={rightAction.onPress} style={styles.headerButton}>
              <Text style={styles.headerIcon}>{rightAction.icon}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: '#0066cc' },
  headerContent: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  headerLeft: { width: 48 },
  headerCenter: { flex: 1, alignItems: 'center' },
  headerRight: { width: 48 },
  headerButton: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  headerIcon: { fontSize: 20, color: '#fff' },
  headerTitle: { fontSize: 18, fontWeight: '600', color: '#fff' },
  headerTitleTablet: { fontSize: 22 },
});