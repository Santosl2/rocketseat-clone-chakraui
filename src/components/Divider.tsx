import { Grid, Divider as ChakraDivider } from "@chakra-ui/react";

export function Divider() {
  return (
    <Grid gridTemplateColumns="1fr 1fr" columnGap={12} opacity={0.07}>
      <ChakraDivider marginY="6" />
      <ChakraDivider marginY="6" />
    </Grid>
  );
}
