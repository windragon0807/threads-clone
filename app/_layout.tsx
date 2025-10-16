import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      {/* presentation: "modal" -> 모달처럼 뜨게 해주는 옵션, Tab에서는 안 되고, Stack에서만 된다. */}
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}
