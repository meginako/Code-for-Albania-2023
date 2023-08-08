import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Resources({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Pressable
          onPress={() => {
            navigation.navigate('Investing Course 1/4');
          }}>
          <Text style={styles.button}>• What is investing?</Text>
          <Text style={styles.preview}>
            Investing refers to the act of allocating money or resources....
          </Text>
          <View style={styles.separator} />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Investing Course 2/4')}>
          <Text style={styles.button}>• How safe is investing?</Text>
          <Text style={styles.preview}>
            Investing, by its nature, involves some level of risk...
          </Text>
          <View style={styles.separator} />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Investing Course 3/4')}>
          <Text style={styles.button}>• Opes and investing</Text>
          <Text style={styles.preview}>
            At Opes, we believe that trust is the cornerstone of any successful
            relationship...
          </Text>
          <View style={styles.separator} />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Investing Course 4/4')}>
          <Text style={styles.button}>• Learn more</Text>
          <Text style={styles.preview}>
            What you have read is just the basics, if you want to learn more
            check out these resources.
          </Text>
        </Pressable>
      </ScrollView>
      <TouchableOpacity
        style={styles.newsButton}
        onPress={() => {
          navigation.navigate('news');
        }}>
        <Text style={styles.buttonTxt}>News</Text>
      </TouchableOpacity>
    </View>
  );
}

function InvestingCourse1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is investing?</Text>
      <ScrollView>
        <Text style={styles.paragraph}>
          Investing refers to the act of allocating money or resources with the
          expectation of generating a positive return or profit over time. It
          involves committing funds to various financial instruments, assets, or
          ventures with the goal of increasing their value or earning income
          from them. The primary objective of investing is to grow wealth or
          preserve purchasing power, especially in the face of inflation.
        </Text>
        <Text style={styles.paragraph}>
          Investing can take many forms, including:
        </Text>
        <Text style={styles.paragraph}>
          • Stock Market Investing: Buying shares of publicly-traded companies,
          which makes you a partial owner (shareholder) and allows you to
          participate in the company's growth and potential dividends.
        </Text>
        <Text style={styles.paragraph}>
          • Bonds: Purchasing debt securities issued by governments or
          corporations, where you essentially lend money and receive interest
          payments over time.
        </Text>
        <Text style={styles.paragraph}>
          • Real Estate: Buying properties or real estate investment trusts
          (REITs) with the expectation of earning rental income or capital
          appreciation.
        </Text>
        <Text style={styles.paragraph}>
          • Mutual Funds and Exchange-Traded Funds (ETFs): Investing in a
          diversified portfolio of stocks, bonds, or other assets managed by
          professional fund managers.
        </Text>
        <Text style={styles.paragraph}>
          • Commodities: Investing in physical goods like gold, silver, oil, or
          agricultural products.
        </Text>
        <Text style={styles.paragraph}>
          • Startups and Venture Capital: Providing capital to early-stage
          companies with high growth potential in exchange for equity.
        </Text>
        <Text style={styles.paragraph}>
          • Cryptocurrencies: Investing in digital currencies like Bitcoin or
          Ethereum.
        </Text>
        <Text style={styles.paragraph}>
          The risks and potential returns associated with investing vary
          significantly depending on the investment vehicle and the overall
          market conditions. Some investments, like stocks and cryptocurrencies,
          can be more volatile, offering higher returns but also carrying higher
          risks. Others, like bonds, tend to be more stable but may offer lower
          returns.
        </Text>
        <Text style={styles.paragraph}>
          It's important to note that investing always carries some degree of
          risk, and it's essential to conduct thorough research, understand your
          risk tolerance, and consider your financial goals before making any
          investment decisions. Many people seek professional advice from
          financial advisors to create a well-rounded investment strategy that
          aligns with their individual circumstances and objectives.
        </Text>
      </ScrollView>
    </View>
  );
}

function InvestingCourse2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How safe is investing?</Text>
      <ScrollView>
        <Text style={styles.paragraph}>
          Investing, by its nature, involves some level of risk, and no
          investment is entirely risk-free. The safety of investing depends on
          various factors, including the type of investment, the overall
          economic conditions, and individual risk tolerance. Here are some key
          points to consider regarding the safety of investing:
        </Text>
        <Text style={styles.paragraph}>
          • Diversification: Diversifying your investment portfolio across
          different asset classes, industries, and geographic regions can help
          mitigate risk. By spreading your investments, you reduce the impact of
          any single investment's poor performance on your overall portfolio.
        </Text>
        <Text style={styles.paragraph}>
          • Time Horizon: Generally, the longer your investment time horizon,
          the more risk you can afford to take. Investments with longer
          timeframes tend to experience more ups and downs, but they may have
          the potential for higher returns over time.
        </Text>
        <Text style={styles.paragraph}>
          • Risk Tolerance: Each investor has a unique risk tolerance, which
          refers to their ability to handle fluctuations in the value of their
          investments. Assessing your risk tolerance can help you determine the
          appropriate level of risk you're comfortable with in your investment
          decisions.
        </Text>
        <Text style={styles.paragraph}>
          • Research and Education: Being informed about the investments you are
          considering can help you make more prudent decisions. Understanding
          the underlying fundamentals, historical performance, and potential
          risks of an investment can enhance your ability to evaluate its
          safety.
        </Text>
        <Text style={styles.paragraph}>
          • Market Conditions: Economic conditions and market fluctuations can
          impact the safety of investments. Some investments, like government
          bonds, tend to be considered safer during economic downturns, while
          others, like stocks, can be more volatile during uncertain times.
        </Text>
        <Text style={styles.paragraph}>
          • Regulation and Protection: Investing in well-regulated markets can
          offer a degree of protection to investors. Government agencies and
          financial regulators often have measures in place to safeguard
          investor interests.
        </Text>
        <Text style={styles.paragraph}>
          • Insurance and Risk Management: In addition to investing, having
          appropriate insurance coverage and a solid risk management plan can
          protect your financial well-being in unexpected events.
        </Text>
        <Text style={styles.paragraph}>
          Remember that all investments come with a level of risk, and even
          seemingly safe investments may still have some potential downsides.
          It's crucial to avoid making investment decisions solely based on
          promises of high returns or claims of safety. Instead, consider your
          financial goals, conduct research, and seek advice from qualified
          financial professionals when needed. Investing is a tool for building
          wealth, but it should be approached with a thoughtful and informed
          mindset.
        </Text>
      </ScrollView>
    </View>
  );
}

function InvestingCourse3({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opes and investing</Text>
      <ScrollView>
        <Text style={styles.paragraph}>
          At Opes, we believe that trust is the cornerstone of any successful
          relationship, and we are dedicated to fostering transparent
          interactions with our clients. One of the primary aspects of our ethos
          is to ensure complete transparency in all aspects of our operations.
          When investors partner with Opes, they can be confident that there
          will be no hidden charges or additional fees for our services, apart
          from the standard government taxes applicable to all financial
          transactions. We want our clients to have a clear and precise
          understanding of their costs, so they can focus on making
          well-informed investment decisions without any surprises.
        </Text>
        <Text style={styles.paragraph}>
          Opes understands that every dollar counts when it comes to investing,
          and we firmly believe that cost should not be a barrier to building
          wealth through the stock market. As a result, we have designed a
          business model that eliminates extra charges for trading and our
          brokerage services. By doing so, we enable our clients to make more
          frequent and strategic trades without worrying about escalating costs
          eating into their returns.
        </Text>
      </ScrollView>
    </View>
  );
}

function InvestingCourse4({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Investing resources</Text>
      <ScrollView>
        <Text style={styles.paragraph}>
          What you have read is just the basics, if you want to learn more check
          out these resources.
        </Text>
        <Text
          style={styles.paragraph}
          onPress={() => Linking.openURL('https://www.investopedia.com/')}>
          • Investopedia: A comprehensive online resource offering articles,
          tutorials, and guides covering various aspects of investing and
          finance. (https://www.investopedia.com/)
        </Text>
        <Text
          style={styles.paragraph}
          onPress={() =>
            Linking.openURL(
              'https://www.khanacademy.org/economics-finance-domain/core-finance'
            )
          }>
          • Khan Academy - Finance and Capital Markets: Provides free video
          tutorials and courses on investing, economics, and personal finance.
          (https://www.khanacademy.org/economics-finance-domain/core-finance)
        </Text>
        <Text
          style={styles.paragraph}
          onPress={() =>
            Linking.openURL(
              'https://www.coursera.org/browse/business/investment-management'
            )
          }>
          • Coursera - Investment Management Courses: Offers free and paid
          courses from top universities on topics like portfolio management and
          financial markets.
          (https://www.coursera.org/browse/business/investment-management)
        </Text>
        <Text
          style={styles.paragraph}
          onPress={() => Linking.openURL('https://www.edx.org/learn/finance')}>
          • edX - Finance Courses: Access a variety of finance-related courses,
          including investing and trading, from renowned universities.
          (https://www.edx.org/learn/finance)
        </Text>
        <Text
          style={styles.paragraph}
          onPress={() =>
            Linking.openURL('https://www.morningstar.com/investing-classroom')
          }>
          • Morningstar Investing Classroom: Provides free online courses,
          articles, and videos on investing, portfolio management, and fund
          analysis. (https://www.morningstar.com/investing-classroom)
        </Text>
        <Text
          style={styles.paragraph}
          onPress={() =>
            Linking.openURL('https://www.bogleheads.org/wiki/Main_Page')
          }>
          • Bogleheads Wiki: An extensive wiki dedicated to the investment
          philosophy of John C. Bogle, founder of Vanguard, with a focus on
          passive investing and low-cost index funds.
          (https://www.bogleheads.org/wiki/Main_Page)
        </Text>
      </ScrollView>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Resources',
            headerStyle: {
              backgroundColor: '#D8E9FD',
            },
            headerTitleStyle: {
              paddingTop: 35,
              paddingLeft: 10,
              paddingBottom: 25,
              fontSize: 28,
              fontWeight: 'bold',
              textAlign: 'left',
              color: '#003B4A',
              fontFamily: 'Times-New-Roman',
            },
          }}
          name="Resources"
          component={Resources}
        />

        <Stack.Screen
          options={{
            title: 'Investing Course 1/4',
            headerStyle: {
              backgroundColor: '#D8E9FD',
            },
          }}
          name="Investing Course 1/4"
          component={InvestingCourse1}
        />

        <Stack.Screen
          options={{
            title: 'Investing Course 2/4',
            headerStyle: {
              backgroundColor: '#D8E9FD',
            },
          }}
          name="Investing Course 2/4"
          component={InvestingCourse2}
        />

        <Stack.Screen
          options={{
            title: 'Investing Course 3/4',
            headerStyle: {
              backgroundColor: '#D8E9FD',
            },
          }}
          name="Investing Course 3/4"
          component={InvestingCourse3}
        />

        <Stack.Screen
          options={{
            title: 'Investing Course 4/4',
            headerStyle: {
              backgroundColor: '#D8E9FD',
            },
          }}
          name="Investing Course 4/4"
          component={InvestingCourse4}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#D8E9FD',
    padding: 8,
  },
  subtitle: {
    color: '#003B4A',
    fontSize: 13,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  button: {
    color: '#003B4A',
    fontSize: 20,
    paddingTop: 15,
    paddingLeft: 15,
  },
  preview: {
    color: '#003B4A',
    fontSize: 13,
    paddingLeft: 10,
    padding: 10,
  },
  paragraph: {
    margin: 7,
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'left',
    padding: 3,
    color: '#003B4A',
  },
  title: {
    paddingTop: 30,
    paddingLeft: 10,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#003B4A',
    fontFamily: 'Times-New-Roman',
  },

  separator: {
    position: 'relative',
    bottom: 1,
    borderBottomColor: '#81B8F9',
    borderBottomWidth: 1,
  },
  newsButton: {
    backgroundColor: '#C5DFFC',
  },
  buttonTxt: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingLeft: 13,
    color: '#002D38',
  },
  //  image: {
  //    position: 'absolute',
  //    top: 35,
  //    right: 15,
  //    width: 20,
  //    height: 20,
  //  },
});
