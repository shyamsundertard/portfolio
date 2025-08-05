import React from 'react';
import { motion } from 'framer-motion';

const ExpertiseGrid = ({
  expertiseItems,
  additionalFeatures,
  getAdaptiveAnimationProps
}: {
  expertiseItems: any[];
  additionalFeatures: any[];
  getAdaptiveAnimationProps: any;
}) => (
  <>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={getAdaptiveAnimationProps(0.8, 0.3)}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 auto-rows-fr"
    >
      {expertiseItems.map((item, index) => {
        const cardAnimationProps = getAdaptiveAnimationProps(0.6, index * 0.1);
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={cardAnimationProps}
            animate={{ scale: 1, y: 0 }}
            whileHover={{
              scale: 1.04,
              y: -12,
              transition: {
                type: "spring",
                stiffness: 600,
                damping: 20,
                mass: 0.3
              }
            }}
            exit={{
              scale: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 600,
                damping: 20,
                mass: 0.3
              }
            }}
            className="group relative h-full"
          >
            <div className="relative p-8 bg-card backdrop-blur-md border border-border rounded-2xl hover:bg-surface/15 hover:border-border/60 transition-all duration-150 ease-out shadow-2xl hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden h-full flex flex-col">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-8 transition-opacity duration-150 ease-out`} />
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl mb-6 shadow-lg`}>
                <item.icon className="text-3xl text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-4 transition-all duration-150 ease-out ${
                item.id === 1 ? 'text-card-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-zinc-500' :
                item.id === 2 ? 'text-card-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-pink-600' :
                item.id === 3 ? 'text-card-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-500' :
                item.id === 4 ? 'text-card-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-emerald-500' :
                item.id === 5 ? 'text-card-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-cyan-600' :
                'text-card-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-zinc-600'
              }`}>
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>
              <div className="space-y-2 mt-auto">
                {item.features.map((feature: string, featureIndex: number) => {
                    const featureAnimationProps = getAdaptiveAnimationProps(0.3, (index * 0.1) + (featureIndex * 0.05));
                    return (
                        <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={featureAnimationProps}
                            className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-150 ease-out"
                        >
                            <div className={`w-2 h-2 bg-gradient-to-r ${item.gradient} rounded-full mr-3`} />
                            {feature}
                        </motion.div>
                    );
                })}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-out rounded-2xl" />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={getAdaptiveAnimationProps(0.8, 0.5)}
      className="mb-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
        {additionalFeatures.map((feature, index) => {
          const featureCardAnimationProps = getAdaptiveAnimationProps(0.6, 0.6 + index * 0.1);
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={featureCardAnimationProps}
              animate={{ scale: 1, y: 0 }}
              whileHover={{
                scale: 1.06,
                y: -10,
                transition: {
                  type: "spring",
                  stiffness: 600,
                  damping: 20,
                  mass: 0.3
                }
              }}
              exit={{
                scale: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 600,
                  damping: 20,
                  mass: 0.3
                }
              }}
              className="group relative p-8 bg-card backdrop-blur-md border border-border rounded-2xl hover:bg-surface/15 hover:border-border/60 transition-all duration-150 ease-out shadow-lg hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden h-full flex flex-col"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-8 transition-opacity duration-150 ease-out`} />
              <div className={`relative z-10 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 shadow-lg`}>
                <feature.icon className="text-3xl text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-4 transition-all duration-150 ease-out ${
                feature.title === 'Clean Code' ? 'text-card-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500' :
                feature.title === 'Innovation' ? 'text-card-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-500' :
                'text-card-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-emerald-500'
              }`}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  </>
);

export default ExpertiseGrid;
