import unittest
from .utils import Calculator


class TestCalculator(unittest.TestCase):

    def test_sum_number(self):
        calculator = Calculator()

        response = calculator.sum(2, 2)
        self.assertEqual(response, 4)

    def test_subtract_number(self):
        calculator = Calculator()

        response = calculator.subtract(5, 2)
        self.assertEqual(response, 3)


if __name__ == '__main__':
    unittest.main()
