// theme.ts
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("rgb(18, 18, 20)", "rgb(18, 18, 20)")(props),
        color: "white",
      },
    }),
  },
});
