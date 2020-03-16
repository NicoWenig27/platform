<?php declare(strict_types=1);

namespace Shopware\Core\Checkout\Test\Cart\Rule;

use PHPUnit\Framework\TestCase;
use Shopware\Core\Checkout\Cart\Cart;
use Shopware\Core\Checkout\Cart\LineItem\LineItem;
use Shopware\Core\Checkout\Cart\LineItem\LineItemCollection;
use Shopware\Core\Checkout\Cart\Rule\CartRuleScope;
use Shopware\Core\Checkout\Cart\Rule\LineItemIsNewRule;
use Shopware\Core\Checkout\Cart\Rule\LineItemScope;
use Shopware\Core\Framework\Uuid\Uuid;
use Shopware\Core\System\SalesChannel\SalesChannelContext;

/**
 * @group rules
 */
class LineItemIsNewRuleTest extends TestCase
{
    /**
     * @var LineItemIsNewRule
     */
    private $rule;

    protected function setUp(): void
    {
        $this->rule = new LineItemIsNewRule();
    }

    public function testGetName(): void
    {
        static::assertEquals('cartLineItemIsNew', $this->rule->getName());
    }

    public function testGetConstraints(): void
    {
        $ruleConstraints = $this->rule->getConstraints();

        static::assertArrayHasKey('isNew', $ruleConstraints, 'Rule Constraint isNew is not defined');
    }

    /**
     * @dataProvider getLineItemScopeTestData
     */
    public function testIfMatchesCorrectWithLineItem(bool $ruleActive, bool $isNew, bool $expected): void
    {
        $this->rule->assign(['isNew' => $ruleActive]);

        $match = $this->rule->match(new LineItemScope(
            $this->createLineItem($isNew),
            $this->createMock(SalesChannelContext::class)
        ));

        static::assertEquals($expected, $match);
    }

    public function getLineItemScopeTestData(): array
    {
        return [
            'rule yes / newcomer yes' => [true, true, true],
            'rule yes / newcomer no' => [true, false, false],
            'rule no / newcomer yes' => [false, true, false],
            'rule no / newcomer no' => [false, false, true],
        ];
    }

    /**
     * @dataProvider getCartRuleScopeTestData
     */
    public function testIfMatchesCorrectWithCartRuleScope(bool $ruleActive, bool $isNew, bool $expected): void
    {
        $cart = new Cart('test', Uuid::randomHex());

        $lineItemCollection = new LineItemCollection();
        $lineItemCollection->add($this->createLineItem($isNew));
        $lineItemCollection->add($this->createLineItem(false));

        $cart->setLineItems($lineItemCollection);

        $this->rule->assign(['isNew' => $ruleActive]);

        $match = $this->rule->match(new CartRuleScope(
            $cart,
            $this->createMock(SalesChannelContext::class)
        ));

        static::assertEquals($expected, $match);
    }

    public function getCartRuleScopeTestData(): array
    {
        return [
            'rule yes / newcomer yes' => [true, true, true],
            'rule yes / newcomer no' => [true, false, false],
            'rule no / newcomer yes' => [false, true, true],
            'rule no / newcomer no' => [false, false, true],
        ];
    }

    private function createLineItem(bool $isNew): LineItem
    {
        return (new LineItem(Uuid::randomHex(), 'product', null, 3))
            ->setPayloadValue('isNew', $isNew);
    }
}
