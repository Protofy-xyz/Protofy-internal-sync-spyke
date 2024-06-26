import { ThemeToggle, GithubIcon, HeaderLink, NextLink, ColorToggleButton, LogoIcon, Session} from 'protolib'
import * as React from 'react'
import {
  TooltipGroup,
  XGroup,
  XStack,
} from 'tamagui'


export type HeaderContentsProps = {
  logoSize?: number,
  menu?: any,
  centerArea?: string,
  logo?: any
  logoHref?: string,
  themeSwitcher?: boolean,
  tintSwitcher?: boolean,
  leftArea?: any,
  rightArea?: any,
  topBar?: any
}
const tooltipDelay = { open: 500, close: 150 }

export const HeaderContents = React.memo(({leftArea, centerArea,rightArea, logo, logoHref="/", themeSwitcher=true, tintSwitcher=true, logoSize=30, menu}: HeaderContentsProps) => {
  return (
    <XStack f={1} pt="$3" >
      <XStack ai="center" space="$4">
        {(logo || themeSwitcher || tintSwitcher) &&
          <XStack f={1} minWidth={210}>
            {logo && <NextLink href={logoHref}>
              <XStack py={logoSize/4} ai="center" px="$3" cur="pointer" my={-20}>
                {logo}
              </XStack>
            </NextLink>}{(themeSwitcher || tintSwitcher) &&
              <TooltipGroup delay={tooltipDelay}>
                <XGroup boc="$color2" bw={1} mah={32} bc="transparent" ai="center" size="$3">
                  {themeSwitcher && <XGroup.Item>
                    <ThemeToggle borderWidth={0} chromeless />
                  </XGroup.Item>}
                  {tintSwitcher && <XGroup.Item>
                    <ColorToggleButton borderWidth={0} chromeless />
                  </XGroup.Item> }
                </XGroup>
              </TooltipGroup>}
          </XStack>}
        {leftArea}
      </XStack>


      {centerArea && <XStack
        position="absolute"
        $sm={{
          opacity: 0,
          pointerEvents: 'none',
        }}
        zIndex={-1}
        jc="center"
        fullscreen
        pointerEvents="none"
        ai="center"
      >
        {centerArea}
      </XStack>}

      <XStack
        marginLeft="auto"
        jc="center"
        h={40}
        miw={160}
        $xs={{ miw: 130 }}
        pointerEvents="auto"
        tag="nav"
        marginRight="$3"
      >
        <XStack ai="center" space="$3">
          {rightArea}
          {menu}
        </XStack>
      </XStack>
    </XStack>
  )
})
