import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useMobile } from '../hooks/useMobile';
import { ChevronDown } from 'lucide-react';

const AccordionSection = ({ title, children, defaultOpen = false, hideTitleOnDesktop = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean, hideTitleOnDesktop?: boolean }) => {
    const isMobile = useMobile();
    const [isOpen, setIsOpen] = useState(!isMobile ? true : defaultOpen);

    // If it's desktop, always show content directly
    if (!isMobile) {
        return (
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
            >
                {title && !hideTitleOnDesktop && <h2 style={{ fontSize: '2rem', color: 'var(--color-white)', marginBottom: '1.5rem' }}>{title}</h2>}
                {children}
            </motion.section>
        );
    }

    // Mobile Accordion View
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel"
            style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.5rem',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--color-white)',
                    textAlign: 'left'
                }}
            >
                <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{title}</h2>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: 'var(--color-orange)' }}
                >
                    <ChevronDown size={24} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default AccordionSection;
